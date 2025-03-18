const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const multer = require("multer");

const app = express();
app.use(cors());
app.use(express.json());

// Serve images
app.use("/imgs", express.static(path.join(__dirname, "imgs")));

// Read data from JSON files
const phoneList = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data", "phones.json"), "utf8")
);
const tabletList = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data", "tablets.json"), "utf8")
);

// Function to sanitize filenames
const sanitizeFilename = (filename) => {
  return filename
    .replace(/[^a-zA-Z0-9.-]/g, "_") // Replace special characters with "_"
    .toLowerCase(); // Convert to lowercase
};

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "imgs")); // Save in "imgs" folder
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname); // Get file extension
    const baseName = path.basename(file.originalname, ext); // Get name without extension
    const safeName = sanitizeFilename(baseName); // Sanitize filename
    cb(null, `${Date.now()}-${safeName}${ext}`); // Generate new safe filename
  },
});

const upload = multer({ storage });

// API route to handle image uploads
app.post("/api/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  const imagePath = `imgs/${req.file.filename}`; // Corrected image path
  res.json({ imageUrl: imagePath });
});

// API routes for phones
app.get("/api/phones", (req, res) => {
  res.json(phoneList);
});

app.post("/api/phones", (req, res) => {
  const newPhone = req.body;

  if (!newPhone || !newPhone.name || !newPhone.company) {
    return res.status(400).json({ message: "Invalid phone data" });
  }

  const phoneData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "data", "phones.json"), "utf8")
  );

  let companyEntry = phoneData.find(
    (item) => item.company.toLowerCase() === newPhone.company.toLowerCase()
  );

  if (!companyEntry) {
    companyEntry = { company: newPhone.company, phones: [] };
    phoneData.push(companyEntry);
  }

  // Generate a unique random ID
  let newId;
  const allPhones = phoneData.flatMap((company) => company.phones);
  do {
    newId = Math.floor(100000 + Math.random() * 900000); // Random number between 100000-999999
  } while (allPhones.some((phone) => phone.id === newId)); // Ensure it's unique

  newPhone.id = newId;
  companyEntry.phones.push(newPhone);

  fs.writeFileSync(
    path.join(__dirname, "data", "phones.json"),
    JSON.stringify(phoneData, null, 2),
    "utf8"
  );

  res
    .status(201)
    .json({ message: "Phone added successfully", phone: newPhone });
});

app.put("/api/phones/:id", upload.single("image"), (req, res) => {
  try {
    const phoneId = parseInt(req.params.id);
    console.log("Updating phone with ID:", phoneId); // Debugging

    const phoneData = JSON.parse(
      fs.readFileSync(path.join(__dirname, "data", "phones.json"), "utf8")
    );

    // Log all IDs for debugging
    const allIDs = phoneData.flatMap((company) =>
      company.phones.map((phone) => phone.id)
    );
    console.log("Available IDs:", allIDs);

    let phoneFound = false;
    let oldPhone = null;

    // Find and remove the old phone
    phoneData.forEach((company) => {
      company.phones = company.phones.filter((phone) => {
        if (phone.id === phoneId) {
          phoneFound = true;
          oldPhone = phone;
          return false; // Remove old phone
        }
        return true;
      });
    });

    if (!phoneFound) {
      return res
        .status(404)
        .json({ message: `Phone with ID ${phoneId} not found` });
    }

    // Update the image if a new one is uploaded
    const updatedData = {
      ...req.body,
      id: phoneId,
      img: req.file ? `imgs/${req.file.filename}` : oldPhone.img,
    };

    // Move to the correct category
    let companyEntry = phoneData.find(
      (c) => c.company.toLowerCase() === updatedData.company.toLowerCase()
    );
    if (!companyEntry) {
      companyEntry = { company: updatedData.company, phones: [] };
      phoneData.push(companyEntry);
    }
    companyEntry.phones.push(updatedData);

    fs.writeFileSync(
      path.join(__dirname, "data", "phones.json"),
      JSON.stringify(phoneData, null, 2),
      "utf8"
    );

    res.json({ message: "Phone updated successfully", updatedData });
  } catch (error) {
    console.error("Error updating phone:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

// API routes for tablets
app.get("/api/tablets", (req, res) => {
  res.json(tabletList);
});

app.post("/api/tablets", (req, res) => {
  const newTablet = req.body;

  if (!newTablet || !newTablet.name || !newTablet.company) {
    return res.status(400).json({ message: "Invalid tablet data" });
  }

  const tabletData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "data", "tablets.json"), "utf8")
  );

  let companyEntry = tabletData.find(
    (item) => item.company.toLowerCase() === newTablet.company.toLowerCase()
  );

  if (!companyEntry) {
    companyEntry = { company: newTablet.company, tablets: [] };
    tabletData.push(companyEntry);
  }

  // Generate a unique random ID
  let newId;
  const allTablets = tabletData.flatMap((company) => company.tablets);
  do {
    newId = Math.floor(100000 + Math.random() * 900000); // Random number between 100000-999999
  } while (allTablets.some((tablet) => tablet.id === newId)); // Ensure it's unique

  newTablet.id = newId;
  companyEntry.tablets.push(newTablet);

  fs.writeFileSync(
    path.join(__dirname, "data", "tablets.json"),
    JSON.stringify(tabletData, null, 2),
    "utf8"
  );

  res
    .status(201)
    .json({ message: "Tablet added successfully", tablet: newTablet });
});

// API routes for search
app.get("/api/search", (req, res) => {
  const query = req.query.q?.toLowerCase() || "";
  if (!query) {
    return res.status(400).json({ message: "Query parameter is required" });
  }

  let phoneResults = [];
  phoneList.forEach((company) => {
    const matchedPhones = company.phones.filter((phone) =>
      phone.name.toLowerCase().includes(query)
    );
    phoneResults = [...phoneResults, ...matchedPhones];
  });

  let tabletResults = [];
  tabletList.forEach((company) => {
    const matchedTablets = company.tablets.filter((tablet) =>
      tablet.name.toLowerCase().includes(query)
    );
    tabletResults = [...tabletResults, ...matchedTablets];
  });

  const results = [...phoneResults, ...tabletResults];

  if (results.length === 0) {
    return res.status(404).json({ message: "No products found" });
  }

  res.json(results);
});

// API routes to get phones by company
app.get("/api/phones/:company", (req, res) => {
  const company = req.params.company.toLowerCase();
  const result = phoneList.find(
    (item) => item.company.toLowerCase() === company
  );
  if (result) {
    res.json(result);
  } else {
    res.status(404).json({ message: "Company not found" });
  }
});

// API routes to get tablets by company
app.get("/api/tablets/:company", (req, res) => {
  const company = req.params.company.toLowerCase();
  const result = tabletList.find(
    (item) => item.company.toLowerCase() === company
  );
  if (result) {
    res.json(result);
  } else {
    res.status(404).json({ message: "Company not found" });
  }
});

// API route to get phone by ID
app.get("/api/phone/:id", (req, res) => {
  const phoneId = parseInt(req.params.id);
  let foundPhone = null;

  phoneList.forEach((company) => {
    const phone = company.phones.find((item) => item.id === phoneId);
    if (phone) {
      foundPhone = phone;
    }
  });

  if (foundPhone) {
    res.json(foundPhone);
  } else {
    res.status(404).json({ message: `Phone with ID ${phoneId} not found` });
  }
});

// API route to get tablet by ID
app.get("/api/tablet/:id", (req, res) => {
  const tabletId = parseInt(req.params.id);
  let foundTablet = null;

  tabletList.forEach((company) => {
    const tablet = company.tablets.find((item) => item.id === tabletId);
    if (tablet) {
      foundTablet = tablet;
    }
  });

  if (foundTablet) {
    res.json(foundTablet);
  } else {
    res.status(404).json({ message: `Tablet with ID ${tabletId} not found` });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
