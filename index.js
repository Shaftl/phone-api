const express = require("express");
const cors = require("cors");
const path = require("path");
const { type } = require("os");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/imgs", express.static(path.join(__dirname, "imgs")));

const phoneList = [
  {
    company: "Iphone",
    phones: [
      {
        type: "phone",
        id: 1,
        name: "Apple iPhone 16 Pro Max",
        released: "Released 2024, September 20",
        mermory: "256GB/512GB/1TB storage, no card slot",
        os: "iOS 18, up to iOS 18.3.1",
        display: '6.9"',
        resolution: "1320x2868 pixels",
        camera: "48",
        photoandvideo: "2160p",
        ram: "8",
        chipset: "Apple A18 Pro",
        battery: "4685",
        charging: "PD2.0",
        watt: "25W",
        img: "imgs/1.jpg",
        price: "$1200",
      },
      {
        type: "phone",
        id: 2,
        name: "Apple iPhone 16 Plus",
        released: "Released 2024, September 20",
        mermory: "128GB/256GB/512GB storage, no card slot",
        os: "iOS 18, up to iOS 18.3.1",
        display: '6.7"',
        resolution: "1320x2868 pixels",
        camera: "48",
        photoandvideo: "2160p",
        ram: "8",
        chipset: "Apple A18",
        battery: "4674",
        charging: "PD2.0",
        watt: "25W",
        img: "imgs/2.jpg",
        price: "$1050",
      },
      {
        type: "phone",
        id: 3,
        name: "Apple iPhone 13 Pro Max",
        released: "Released 2021, September 24",
        mermory: "128GB/256GB/1TB storage, no card slot",
        os: "iOS 15, up to iOS 18.3.1",
        display: '6.7"',
        resolution: "1284x2778 pixels",
        camera: "12",
        photoandvideo: "2160p",
        ram: "6",
        chipset: "Apple A15 Bionic",
        battery: "4352",
        charging: "PD2.0",
        watt: "15W",
        img: "imgs/3.jpg",
        price: "$950",
      },
      {
        type: "phone",
        id: 4,
        name: "Apple iPhone XS Max",
        released: "Released 2018, September 21",
        mermory: "64GB/256GB/512GB storage, no card slot",
        os: "iOS 12, up to iOS 18.3.1",
        display: '6.5"',
        resolution: "1242x2688 pixels",
        camera: "12",
        photoandvideo: "2160p",
        ram: "4",
        chipset: "Apple A12 Bionic",
        battery: "3174",
        charging: "15w",
        watt: "5W",
        img: "imgs/4.jpg",
        price: "$750",
      },
    ],
  },
  {
    company: "Samsung",
    phones: [
      {
        type: "phone",
        id: 5,
        name: "Samsung Galaxy S24 Ultra",
        released: "Released 2024, January 17",
        memory: "256GB/512GB/1TB storage, no card slot",
        os: "Android 14, One UI 6.1",
        display: '6.8"',
        resolution: "3120x1440 pixels",
        camera: "200MP",
        photoandvideo: "8K",
        ram: "12GB",
        chipset: "Qualcomm Snapdragon 8 Gen 3",
        battery: "5000mAh",
        charging: "45W",
        watt: "45W",
        img: "imgs/5.jpg",
        price: "$1500",
      },
      {
        type: "phone",
        id: 6,
        name: "Samsung Galaxy S24+",
        released: "Released 2024, January 17",
        memory: "256GB/512GB storage, no card slot",
        os: "Android 14, One UI 6.1",
        display: '6.7"',
        resolution: "3120x1440 pixels",
        camera: "50MP",
        photoandvideo: "8K",
        ram: "12GB",
        chipset: "Samsung Exynos 2400 or Qualcomm Snapdragon 8 Gen 3",
        battery: "4900mAh",
        charging: "45W",
        watt: "45W",
        img: "imgs/6.jpg",
        price: "$1200",
      },
      {
        type: "phone",
        id: 7,
        name: "Samsung Galaxy S24",
        released: "Released 2024, January 17",
        memory: "128GB/256GB/512GB storage, no card slot",
        os: "Android 14, One UI 6.1",
        display: '6.2"',
        resolution: "2340x1080 pixels",
        camera: "50MP",
        photoandvideo: "8K",
        ram: "8GB/12GB",
        chipset: "Samsung Exynos 2400 or Qualcomm Snapdragon 8 Gen 3",
        battery: "4000mAh",
        charging: "25W",
        watt: "25W",
        img: "imgs/6d.jpg",
        price: "$950",
      },
      {
        type: "phone",
        id: 8,
        name: "Samsung Galaxy S24 FE",
        released: "Released 2024, September 26",
        memory: "128GB/256GB/512GB storage, no card slot",
        os: "Android 14, One UI 6.1",
        display: '6.7"',
        resolution: "2340x1080 pixels",
        camera: "50MP",
        photoandvideo: "8K",
        ram: "8GB",
        chipset: "Samsung Exynos 2400e",
        battery: "4700mAh",
        charging: "25W",
        watt: "25W",
        img: "imgs/8.jpg",
        price: "$850",
      },
      {
        type: "phone",
        id: 9,
        name: "Samsung Galaxy A56 5G",
        released: "Released 2025, March 4",
        memory: "128GB/256GB storage, microSDXC slot",
        os: "Android 14, One UI 6.1",
        display: '6.7"',
        resolution: "2400x1080 pixels",
        camera: "50MP",
        photoandvideo: "4K",
        ram: "6GB/8GB",
        chipset: "Exynos 1580",
        battery: "5000mAh",
        charging: "45W",
        watt: "45W",
        img: "imgs/9.jpg",
        price: "$600",
      },
    ],
  },
  {
    company: "Sony",
    phones: [
      {
        type: "phone",
        id: 10,
        name: "Sony Xperia 1 V",
        released: "Released 2023, May 11",
        memory: "256GB/512GB storage, microSDXC",
        os: "Android 13, upgradable to Android 14",
        display: '6.5"',
        resolution: "1644x3840 pixels",
        camera: "48MP",
        photoandvideo: "4320p",
        ram: "12GB",
        chipset: "Snapdragon 8 Gen 2",
        battery: "5000mAh",
        charging: "Fast charging",
        watt: "30W",
        img: "imgs/11.jpg",
        price: "$1499",
      },
      {
        type: "phone",
        id: 11,
        name: "Sony Xperia 10 V",
        released: "Released 2023, July 01",
        memory: "128GB storage, microSDXC",
        os: "Android 13, upgradable to Android 14",
        display: '6.1"',
        resolution: "1080x2520 pixels",
        camera: "48MP",
        photoandvideo: "2160p",
        ram: "6GB/8GB",
        chipset: "Snapdragon 695 5G",
        battery: "5000mAh",
        charging: "Fast charging",
        watt: "30W",
        img: "imgs/10.jpg",
        price: "$599",
      },
      {
        type: "phone",
        id: 12,
        name: "Sony Xperia Pro-I",
        released: "Released 2021, December 10",
        memory: "512GB storage, microSDXC",
        os: "Android 11, upgradable to Android 14",
        display: '6.5"',
        resolution: "1644x3840 pixels",
        camera: "12MP",
        photoandvideo: "4320p",
        ram: "12GB",
        chipset: "Snapdragon 888 5G",
        battery: "4500mAh",
        charging: "Fast charging",
        watt: "30W",
        img: "imgs/13.jpg",
        price: "$1799",
      },
    ],
  },
  {
    company: "Xiaomi",
    phones: [
      {
        type: "phone",
        id: 13,
        name: "Xiaomi 15 Ultra",
        released: "Released 2025, February 28",
        memory: "256GB/512GB/1TB storage, no card slot",
        os: "Android 14, MIUI 16",
        display: '6.73"',
        resolution: "1440x3200 pixels",
        camera: "50MP",
        photoandvideo: "4320p",
        ram: "12GB/16GB",
        chipset: "Snapdragon 8 Elite",
        battery: "5000mAh",
        charging: "Fast charging",
        watt: "90W",
        img: "imgs/14.jpg",
        price: "$1599",
      },
      {
        type: "phone",
        id: 14,
        name: "Xiaomi 15",
        released: "Released 2024, October 29",
        memory: "256GB/512GB storage, no card slot",
        os: "Android 15, HyperOS 2",
        display: '6.36"',
        resolution: "1200x2670 pixels",
        camera: "50MP",
        photoandvideo: "4320p",
        ram: "12GB/16GB",
        chipset: "Snapdragon 8 Elite",
        battery: "5400mAh",
        charging: "Fast charging",
        watt: "90W",
        img: "imgs/15.jpg",
        price: "$1299",
      },
      {
        type: "phone",
        id: 15,
        name: "Xiaomi 15 Pro",
        released: "Released 2024, October 29",
        memory: "256GB/512GB/1TB storage, no card slot",
        os: "Android 15, HyperOS 2",
        display: '6.73"',
        resolution: "1440x3200 pixels",
        camera: "50MP",
        photoandvideo: "4320p",
        ram: "12GB/16GB",
        chipset: "Snapdragon 8 Elite",
        battery: "6100mAh",
        charging: "Fast charging",
        watt: "90W",
        img: "imgs/16.jpg",
        price: "$1499",
      },
      {
        type: "phone",
        id: 16,
        name: "Xiaomi Mix Flip",
        released: "Released 2024, October 15",
        memory: "256GB/512GB storage, no card slot",
        os: "Android 14, MIUI 15",
        display: '6.86"',
        resolution: "1080x2520 pixels",
        camera: "50MP",
        photoandvideo: "4320p",
        ram: "12GB",
        chipset: "Snapdragon 8 Gen 3",
        battery: "4780mAh",
        charging: "Fast charging",
        watt: "67W",
        img: "imgs/17.jpg",
        price: "$1099",
      },
      {
        type: "phone",
        id: 17,
        name: "Xiaomi Mix Fold 4",
        released: "Released 2024, August 16",
        memory: "256GB/512GB/1TB storage, no card slot",
        os: "Android 14, MIUI 15",
        display: '8.02"',
        resolution: "1914x2160 pixels",
        camera: "50MP",
        photoandvideo: "4320p",
        ram: "12GB/16GB",
        chipset: "Snapdragon 8 Gen 3",
        battery: "5000mAh",
        charging: "Fast charging",
        watt: "67W",
        img: "imgs/18.jpg",
        price: "$1799",
      },
      {
        type: "phone",
        id: 18,
        name: "Xiaomi 14T Pro",
        released: "Released 2024, July 20",
        memory: "256GB/512GB storage, no card slot",
        os: "Android 14, MIUI 15",
        display: '6.67"',
        resolution: "1220x2712 pixels",
        camera: "200MP",
        photoandvideo: "4320p",
        ram: "12GB",
        chipset: "Snapdragon 8 Gen 2",
        battery: "5000mAh",
        charging: "Fast charging",
        watt: "120W",
        img: "imgs/placeholder.png",
        price: "$1199",
      },
      {
        type: "phone",
        id: 19,
        name: "Xiaomi 14T",
        released: "Released 2024, July 20",
        memory: "128GB/256GB storage, no card slot",
        os: "Android 14, MIUI 15",
        display: '6.67"',
        resolution: "1220x2712 pixels",
        camera: "108MP",
        photoandvideo: "4320p",
        ram: "8GB",
        chipset: "Snapdragon 8 Gen 2",
        battery: "5000mAh",
        charging: "Fast charging",
        watt: "120W",
        img: "imgs/placeholder.png",
        price: "$999",
      },
      {
        type: "phone",
        id: 20,
        name: "Xiaomi 14 Civi",
        released: "Released 2024, May 10",
        memory: "128GB/256GB storage, no card slot",
        os: "Android 14, MIUI 15",
        display: '6.55"',
        resolution: "1080x2400 pixels",
        camera: "50MP",
        photoandvideo: "4320p",
        ram: "8GB/12GB",
        chipset: "Snapdragon 7 Gen 2",
        battery: "4500mAh",
        charging: "Fast charging",
        watt: "67W",
        img: "imgs/placeholder.png",
        price: "$849",
      },
      {
        type: "phone",
        id: 21,
        name: "Xiaomi 14 Lite",
        released: "Released 2024, March 25",
        memory: "128GB/256GB storage, microSDXC",
        os: "Android 14, MIUI 15",
        display: '6.55"',
        resolution: "1080x2400 pixels",
        camera: "64MP",
        photoandvideo: "2160p",
        ram: "6GB/8GB",
        chipset: "Snapdragon 7 Gen 1",
        battery: "4500mAh",
        charging: "Fast charging",
        watt: "67W",
        img: "imgs/placeholder.png",
        price: "$799",
      },
      {
        type: "phone",
        id: 22,
        name: "Xiaomi 14",
        released: "Released 2023, December 31",
        memory: "256GB/512GB storage, no card slot",
        os: "Android 13, MIUI 14",
        display: '6.36"',
        resolution: "1200x2670 pixels",
        camera: "50MP",
        photoandvideo: "4320p",
        ram: "8GB/12GB",
        chipset: "Snapdragon 8 Gen 2",
        battery: "4500mAh",
        charging: "Fast charging",
        watt: "90W",
        img: "imgs/placeholder.png",
        price: "$899",
      },
    ],
  },
  {
    company: "Oppo",
    phones: [
      {
        type: "phone",
        id: 23,
        name: "Oppo Find N5",
        released: "Released 2025, February 28",
        memory: "512GB storage, no card slot",
        os: "Android 14, ColorOS 14",
        display: '7.1"',
        resolution: "1792x1920 pixels",
        camera: "50MP",
        photoandvideo: "2160p",
        ram: "16GB",
        chipset: "Qualcomm Snapdragon 8 Elite",
        battery: "5600mAh",
        charging: "Fast charging",
        watt: "80W",
        img: "imgs/19.jpg",
        price: "$1299",
      },
      {
        type: "phone",
        id: 24,
        name: "Oppo Reno13 Pro",
        released: "Released 2024, November 15",
        memory: "256GB/512GB storage, no card slot",
        os: "Android 14, ColorOS 14",
        display: '6.74"',
        resolution: "2772x1270 pixels",
        camera: "50MP",
        photoandvideo: "2160p",
        ram: "16GB",
        chipset: "MediaTek Dimensity 8350",
        battery: "5800mAh",
        charging: "Fast charging",
        watt: "80W",
        img: "imgs/20.jpg",
        price: "$999",
      },
      {
        type: "phone",
        id: 25,
        name: "Oppo Reno13",
        released: "Released 2024, November 15",
        memory: "256GB/512GB storage, no card slot",
        os: "Android 14, ColorOS 14",
        display: '6.59"',
        resolution: "2760x1256 pixels",
        camera: "50MP",
        photoandvideo: "2160p",
        ram: "12GB/16GB",
        chipset: "MediaTek Dimensity 8350",
        battery: "5600mAh",
        charging: "Fast charging",
        watt: "80W",
        img: "imgs/21.jpg",
        price: "$899",
      },
      {
        type: "phone",
        id: 26,
        name: "Oppo Reno13 F",
        released: "Released 2025, January 10",
        memory: "256GB/512GB storage, microSDXC",
        os: "Android 14, ColorOS 14",
        display: '6.67"',
        resolution: "2400x1080 pixels",
        camera: "50MP",
        photoandvideo: "2160p",
        ram: "8GB",
        chipset: "MediaTek Helio G100",
        battery: "5800mAh",
        charging: "Fast charging",
        watt: "45W",
        img: "imgs/22.jpg",
        price: "$599",
      },
      {
        type: "phone",
        id: 27,
        name: "Oppo Reno12 Pro",
        released: "Released 2024, August 27",
        memory: "256GB storage, no card slot",
        os: "Android 14, ColorOS 13",
        display: '6.7"',
        resolution: "2412x1080 pixels",
        camera: "50MP",
        photoandvideo: "2160p",
        ram: "12GB",
        chipset: "MediaTek Dimensity 7050",
        battery: "5000mAh",
        charging: "Fast charging",
        watt: "67W",
        img: "imgs/placeholder.png",
        price: "$749",
      },
      {
        type: "phone",
        id: 28,
        name: "Oppo Reno12",
        released: "Released 2024, August 27",
        memory: "256GB storage, no card slot",
        os: "Android 14, ColorOS 13",
        display: '6.7"',
        resolution: "2412x1080 pixels",
        camera: "50MP",
        photoandvideo: "2160p",
        ram: "8GB",
        chipset: "MediaTek Dimensity 7050",
        battery: "5000mAh",
        charging: "Fast charging",
        watt: "67W",
        img: "imgs/placeholder.png",
        price: "$649",
      },
      {
        type: "phone",
        id: 29,
        name: "Oppo Reno11 Pro",
        released: "Released 2024, January 15",
        memory: "256GB storage, no card slot",
        os: "Android 13, ColorOS 13",
        display: '6.74"',
        resolution: "2772x1270 pixels",
        camera: "50MP",
        photoandvideo: "2160p",
        ram: "12GB",
        chipset: "MediaTek Dimensity 8200",
        battery: "4600mAh",
        charging: "Fast charging",
        watt: "80W",
        img: "imgs/placeholder.png",
        price: "$799",
      },
      {
        type: "phone",
        id: 30,
        name: "Oppo Reno11",
        released: "Released 2024, January 15",
        memory: "128GB/256GB storage, no card slot",
        os: "Android 13, ColorOS 13",
        display: '6.7"',
        resolution: "2412x1080 pixels",
        camera: "50MP",
        photoandvideo: "2160p",
        ram: "8GB/12GB",
        chipset: "MediaTek Dimensity 7050",
        battery: "5000mAh",
        charging: "Fast charging",
        watt: "67W",
        img: "imgs/placeholder.png",
        price: "$699",
      },
      {
        type: "phone",
        id: 31,
        name: "Oppo Reno11 F",
        released: "Released 2024, February 20",
        memory: "256GB storage, microSDXC",
        os: "Android 13, ColorOS 13",
        display: '6.67"',
        resolution: "2400x1080 pixels",
        camera: "64MP",
        photoandvideo: "2160p",
        ram: "8GB",
        chipset: "MediaTek Dimensity 7050",
        battery: "5000mAh",
        charging: "Fast charging",
        watt: "67W",
        img: "imgs/placeholder.png",
        price: "$649",
      },
      {
        type: "phone",
        id: 32,
        name: "Oppo Find X8 Pro",
        released: "Released 2024, March 10",
        memory: "256GB/512GB storage, no card slot",
        os: "Android 14, ColorOS 14",
        display: '6.82"',
        resolution: "1440x3168 pixels",
        camera: "50MP",
        photoandvideo: "2160p",
        ram: "12GB/16GB",
        chipset: "Qualcomm Snapdragon 8 Gen 3",
        battery: "5000mAh",
        charging: "Fast charging",
        watt: "80W",
        img: "imgs/placeholder.png",
        price: "$1199",
      },
    ],
  },
  {
    company: "Asus",
    phones: [
      {
        type: "phone",
        id: 33,
        name: "Asus Zenfone 12 Ultra",
        released: "Released 2025, March 5",
        memory: "256GB/512GB storage, no card slot",
        os: "Android 14, ZenUI 12",
        display: '6.8"',
        resolution: "3200x1440 pixels",
        camera: "108MP",
        photoandvideo: "8K",
        ram: "12GB/16GB",
        chipset: "Qualcomm Snapdragon 8 Gen 3",
        battery: "5000mAh",
        charging: "Fast charging",
        watt: "65W",
        img: "imgs/23.jpg",
        price: "$1299",
      },
      {
        type: "phone",
        id: 34,
        name: "Asus ROG Phone 9 Pro",
        released: "Released 2025, January 20",
        memory: "512GB/1TB storage, no card slot",
        os: "Android 14, ROG UI",
        display: '6.78"',
        resolution: "2448x1080 pixels",
        camera: "64MP",
        photoandvideo: "8K",
        ram: "16GB/24GB",
        chipset: "Qualcomm Snapdragon 8 Elite",
        battery: "6000mAh",
        charging: "Fast charging",
        watt: "65W",
        img: "imgs/24.jpg",
        price: "$1599",
      },
      {
        type: "phone",
        id: 35,
        name: "Asus ROG Phone 9",
        released: "Released 2025, January 20",
        memory: "256GB/512GB storage, no card slot",
        os: "Android 14, ROG UI",
        display: '6.78"',
        resolution: "2448x1080 pixels",
        camera: "64MP",
        photoandvideo: "8K",
        ram: "12GB/16GB",
        chipset: "Qualcomm Snapdragon 8 Elite",
        battery: "6000mAh",
        charging: "Fast charging",
        watt: "65W",
        img: "imgs/25.jpg",
        price: "$1499",
      },
      {
        type: "phone",
        id: 36,
        name: "Asus Zenfone 11 Ultra",
        released: "Released 2024, August 15",
        memory: "256GB/512GB storage, no card slot",
        os: "Android 13, ZenUI 11",
        display: '6.8"',
        resolution: "3200x1440 pixels",
        camera: "108MP",
        photoandvideo: "8K",
        ram: "12GB/16GB",
        chipset: "Qualcomm Snapdragon 8 Gen 2",
        battery: "5000mAh",
        charging: "Fast charging",
        watt: "65W",
        img: "imgs/26.jpg",
        price: "$1199",
      },
      {
        type: "phone",
        id: 37,
        name: "Asus ROG Phone 8 Pro",
        released: "Released 2024, March 10",
        memory: "512GB/1TB storage, no card slot",
        os: "Android 13, ROG UI",
        display: '6.78"',
        resolution: "2448x1080 pixels",
        camera: "64MP",
        photoandvideo: "8K",
        ram: "16GB/24GB",
        chipset: "Qualcomm Snapdragon 8 Gen 2",
        battery: "6000mAh",
        charging: "Fast charging",
        watt: "65W",
        img: "imgs/27.jpg",
        price: "$1699",
      },
      {
        type: "phone",
        id: 38,
        name: "Asus ROG Phone 8",
        released: "Released 2024, March 10",
        memory: "256GB/512GB storage, no card slot",
        os: "Android 13, ROG UI",
        display: '6.78"',
        resolution: "2448x1080 pixels",
        camera: "64MP",
        photoandvideo: "8K",
        ram: "12GB/16GB",
        chipset: "Qualcomm Snapdragon 8 Gen 2",
        battery: "6000mAh",
        charging: "Fast charging",
        watt: "65W",
        img: "imgs/placeholder.png",
        price: "$1399",
      },
    ],
  },
  {
    company: "Infinix",
    phones: [
      {
        type: "phone",
        id: 43,
        name: "Infinix Note 50 Pro 4G",
        released: "Expected 2025",
        memory: "128GB/256GB storage, microSDXC",
        os: "Android 14, XOS 10.6",
        display: '6.9"',
        resolution: "1080x2460 pixels",
        camera: "108MP",
        photoandvideo: "4K",
        ram: "8GB",
        chipset: "MediaTek Helio G99",
        battery: "5000mAh",
        charging: "Fast charging",
        watt: "33W",
        img: "imgs/28.jpg",
        price: "$299",
      },
      {
        type: "phone",
        id: 44,
        name: "Infinix Zero Flip",
        released: "Expected 2025",
        memory: "256GB storage, no card slot",
        os: "Android 14, XOS 10.6",
        display: '6.8"',
        resolution: "1080x2400 pixels",
        camera: "50MP",
        photoandvideo: "4K",
        ram: "12GB",
        chipset: "MediaTek Dimensity 1200",
        battery: "4000mAh",
        charging: "Fast charging",
        watt: "44W",
        img: "imgs/29.jpg",
        price: "$399",
      },
      {
        type: "phone",
        id: 45,
        name: "Infinix Note 40 Pro+",
        released: "Expected 2025",
        memory: "128GB/256GB storage, microSDXC",
        os: "Android 14, XOS 10.6",
        display: '6.95"',
        resolution: "1080x2460 pixels",
        camera: "108MP",
        photoandvideo: "4K",
        ram: "8GB",
        chipset: "MediaTek Helio G99",
        battery: "5000mAh",
        charging: "Fast charging",
        watt: "33W",
        img: "imgs/30.jpg",
        price: "$349",
      },
      {
        type: "phone",
        id: 46,
        name: "Infinix Zero 40 5G",
        released: "Expected 2025",
        memory: "256GB storage, no card slot",
        os: "Android 14, XOS 10.6",
        display: '6.8"',
        resolution: "1080x2400 pixels",
        camera: "50MP",
        photoandvideo: "4K",
        ram: "12GB",
        chipset: "MediaTek Dimensity 1200",
        battery: "4500mAh",
        charging: "Fast charging",
        watt: "44W",
        img: "imgs/31.jpg",
        price: "$379",
      },
      {
        type: "phone",
        id: 47,
        name: "Infinix Hot 50 Pro 4G",
        released: "Expected 2025",
        memory: "128GB storage, microSDXC",
        os: "Android 14, XOS 10.6",
        display: '6.82"',
        resolution: "720x1640 pixels",
        camera: "50MP",
        photoandvideo: "1080p",
        ram: "6GB",
        chipset: "MediaTek Helio G85",
        battery: "6000mAh",
        charging: "Fast charging",
        watt: "18W",
        img: "imgs/placeholder.png",
        price: "$249",
      },
      {
        type: "phone",
        id: 48,
        name: "Infinix Smart 9 HD",
        released: "Expected 2025",
        memory: "64GB storage, microSDXC",
        os: "Android 14 (Go edition), XOS 10.6",
        display: '6.6"',
        resolution: "720x1612 pixels",
        camera: "8MP",
        photoandvideo: "1080p",
        ram: "2GB",
        chipset: "Unisoc SC9863A1",
        battery: "5000mAh",
        charging: "Standard charging",
        watt: "10W",
        img: "imgs/placeholder.png",
        price: "$129",
      },
      {
        type: "phone",
        id: 49,
        name: "Infinix Hot 50i",
        released: "Expected 2025",
        memory: "64GB storage, microSDXC",
        os: "Android 14 (Go edition), XOS 10.6",
        display: '6.52"',
        resolution: "720x1600 pixels",
        camera: "8MP",
        photoandvideo: "1080p",
        ram: "2GB",
        chipset: "Unisoc SC7731E",
        battery: "5000mAh",
        charging: "Standard charging",
        watt: "10W",
        img: "imgs/placeholder.png",
        price: "$119",
      },
      {
        type: "phone",
        id: 50,
        name: "Infinix Zero 30 4G",
        released: "2024, September",
        memory: "256GB storage, microSDXC",
        os: "Android 13, XOS 10.6",
        display: '6.78"',
        resolution: "1080x2400 pixels",
        camera: "108MP",
        photoandvideo: "4K",
        ram: "8GB",
        chipset: "MediaTek Helio G99",
        battery: "5000mAh",
        charging: "Fast charging",
        watt: "33W",
        img: "imgs/placeholder.png",
        price: "$329",
      },
      {
        type: "phone",
        id: 51,
        name: "Infinix GT 10 Pro",
        released: "2024, August",
        memory: "256GB storage, microSDXC",
        os: "Android 13, XOS 10.6",
        display: '6.67"',
        resolution: "1080x2400 pixels",
        camera: "108MP",
        photoandvideo: "4K",
        ram: "8GB",
        chipset: "MediaTek Dimensity 8050",
        battery: "5000mAh",
        charging: "Fast charging",
        watt: "45W",
        img: "imgs/placeholder.png",
        price: "$399",
      },
      {
        type: "phone",
        id: 52,
        name: "Infinix Note 30 VIP",
        released: "2024, June",
        memory: "256GB storage, microSDXC",
        os: "Android 13, XOS 10.6",
        display: '6.67"',
        resolution: "1080x2400 pixels",
        camera: "108MP",
        photoandvideo: "4K",
        ram: "12GB",
        chipset: "MediaTek Dimensity 8050",
        battery: "5000mAh",
        charging: "Fast charging",
        watt: "68W",
        img: "imgs/placeholder.png",
        price: "$499",
      },
    ],
  },
];
const tabletList = [
  {
    company: "Iphone",
    tablets: [
      {
        type: "tablet",
        id: 53,
        name: "Apple iPad Pro 13 (2024)",
        released: "Released 2024, May 15",
        memory: "256GB/512GB/2TB storage, no card slot",
        os: "iPadOS 17.5.1, up to iPadOS 18.3.2",
        display: '13.0"',
        resolution: "2064x2752 pixels",
        camera: "12MP",
        photoandvideo: "2160p",
        ram: "8/16GB RAM",
        chipset: "Apple M4",
        battery: "10290mAh",
        charging: "",
        watt: "",
        img: "imgs/tablets-1.jpg",
        price: "$1,099",
      },
      {
        type: "tablet",
        id: 54,
        name: "Apple iPad Air 11 (2024)",
        released: "Released 2024, May 15",
        memory: "128GB/256GB/1TB storage, no card slot",
        os: "iPadOS 17.4, upgradable to iPadOS 18",
        display: '11.0"',
        resolution: "1640x2360 pixels",
        camera: "12MP",
        photoandvideo: "2160p",
        ram: "8GB RAM",
        chipset: "Apple M2",
        battery: "28.93Wh",
        charging: "",
        watt: "",
        img: "imgs/tablets-2.jpg",
        price: "$749",
      },
      {
        type: "tablet",
        id: 55,
        name: "Apple iPad Pro 12.9 (2021)",
        released: "Released 2021, May 21",
        memory: "128GB/256GB/2TB storage, no card slot",
        os: "iPadOS 14.5.1, upgradable to iPadOS 17.2",
        display: '12.9"',
        resolution: "2048x2732 pixels",
        camera: "12MP",
        photoandvideo: "4K",
        ram: "8/16GB RAM",
        chipset: "Apple M1",
        battery: "10758mAh",
        charging: "",
        watt: "",
        img: "imgs/tablets-3.jpg",
        price: "$1,099",
      },
      {
        type: "tablet",
        id: 56,
        name: "Apple iPad mini (2021)",
        released: "Released 2021, September 24",
        memory: "64GB/256GB storage, no card slot",
        os: "iPadOS 15, upgradable to iPadOS 18.2.1",
        display: '8.3"',
        resolution: "1488x2266 pixels",
        camera: "12MP",
        photoandvideo: "4K",
        ram: "4GB RAM",
        chipset: "Apple A15 Bionic",
        battery: "5078mAh",
        charging: "",
        watt: "",
        img: "imgs/tablets-4.jpg",
        price: "$499",
      },
      {
        type: "tablet",
        id: 57,
        name: "Apple iPad Air (2022)",
        released: "Released 2022, March 18",
        memory: "64GB/256GB storage, no card slot",
        os: "iPadOS 15.4, upgradable to iPadOS 17.2",
        display: '10.9"',
        resolution: "1640x2360 pixels",
        camera: "12MP",
        photoandvideo: "4K",
        ram: "8GB RAM",
        chipset: "Apple M1",
        battery: "28.6Wh",
        charging: "",
        watt: "",
        img: "imgs/placeholder.png",
        price: "$649",
      },
      {
        type: "tablet",
        id: 58,
        name: "Apple iPad Pro 11 (2022)",
        released: "Released 2022, October 26",
        memory: "128GB/256GB/2TB storage, no card slot",
        os: "iPadOS 16.1, upgradable to iPadOS 17.2",
        display: '11.0"',
        resolution: "1668x2388 pixels",
        camera: "12MP",
        photoandvideo: "4K",
        ram: "8/16GB RAM",
        chipset: "Apple M2",
        battery: "7538mAh",
        charging: "",
        watt: "",
        img: "imgs/placeholder.png",
        price: "$799",
      },
    ],
  },
  {
    company: "Samsung",
    tablets: [
      {
        type: "tablet",
        id: 59,
        name: "Samsung Galaxy Tab S10 Ultra",
        released: "Released 2024, October 3",
        memory: "256GB/512GB/1TB storage, microSDXC",
        os: "Android 14 with One UI 6.1.1",
        display: '14.6"',
        resolution: "1848x2960 pixels",
        camera: "13MP + 6MP",
        photoandvideo: "4K",
        ram: "8/12/16GB RAM",
        chipset: "MediaTek Dimensity 9300+ Octa Core",
        battery: "11200mAh",
        charging: "45W",
        watt: "",
        img: "imgs/tablets-5.jpg",
        price: "$1,299",
      },
      {
        type: "tablet",
        id: 60,
        name: "Samsung Galaxy Tab S10+",
        released: "Released 2024, October 3",
        memory: "256GB/512GB storage, microSDXC",
        os: "Android 14 with One UI 6.1.1",
        display: '12.4"',
        resolution: "1752x2800 pixels",
        camera: "13MP + 6MP",
        photoandvideo: "4K",
        ram: "8/12GB RAM",
        chipset: "MediaTek Dimensity 9300+ Octa Core",
        battery: "10090mAh",
        charging: "45W",
        watt: "",
        img: "imgs/tablets-6.jpg",
        price: "$999",
      },
      {
        type: "tablet",
        id: 61,
        name: "Samsung Galaxy Tab S9 Ultra",
        released: "Released 2023, August 11",
        memory: "256GB/512GB/1TB storage, microSDXC",
        os: "Android 14 with One UI 6.1.1",
        display: '14.6"',
        resolution: "1848x2960 pixels",
        camera: "13MP + 6MP",
        photoandvideo: "4K",
        ram: "8/12/16GB RAM",
        chipset: "Qualcomm Snapdragon 8 Gen 2 for Galaxy",
        battery: "11200mAh",
        charging: "45W",
        watt: "",
        img: "imgs/tablets-7.jpg",
        price: "$1,199",
      },
      {
        type: "tablet",
        id: 62,
        name: "Samsung Galaxy Tab S9+",
        released: "Released 2023, August 11",
        memory: "256GB/512GB storage, microSDXC",
        os: "Android 14 with One UI 6.1.1",
        display: '12.4"',
        resolution: "1752x2800 pixels",
        camera: "13MP + 6MP",
        photoandvideo: "4K",
        ram: "8/12GB RAM",
        chipset: "Qualcomm Snapdragon 8 Gen 2 for Galaxy",
        battery: "10090mAh",
        charging: "45W",
        watt: "",
        img: "imgs/placeholder.png",
        price: "$999",
      },
      {
        type: "tablet",
        id: 63,
        name: "Samsung Galaxy Tab S9",
        released: "Released 2023, August 11",
        memory: "128GB/256GB storage, microSDXC",
        os: "Android 14 with One UI 6.1.1",
        display: '11.0"',
        resolution: "1600x2560 pixels",
        camera: "13MP",
        photoandvideo: "4K",
        ram: "8/12GB RAM",
        chipset: "Qualcomm Snapdragon 8 Gen 2",
        battery: "8400mAh",
        charging: "45W",
        watt: "",
        img: "imgs/placeholder.png",
        price: "$799",
      },
    ],
  },
];

// API route to get all phone data
app.get("/api/phones", (req, res) => {
  res.json(phoneList);
});

app.get("/api/tablets", (req, res) => {
  res.json(tabletList);
});

// API route to get phones by company
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

app.get("/api/phone/:id", (req, res) => {
  const phoneId = parseInt(req.params.id); // Parse ID as an integer
  let foundPhone = null;

  // Loop through companies and their phones to find the phone by ID
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

// API route to get phones by company
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

app.get("/api/tablet/:id", (req, res) => {
  const phoneId = parseInt(req.params.id); // Parse ID as an integer
  let foundPhone = null;

  // Loop through companies and their phones to find the phone by ID
  tabletList.forEach((company) => {
    const phone = company.tablets.find((item) => item.id === phoneId);
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

app.get("/api/search", (req, res) => {
  const query = req.query.q?.toLowerCase() || "";
  if (!query) {
    return res.status(400).json({ message: "Query parameter is required" });
  }

  // Search in phones
  let phoneResults = [];
  phoneList.forEach((company) => {
    const matchedPhones = company.phones.filter((phone) =>
      phone.name.toLowerCase().includes(query)
    );
    phoneResults = [...phoneResults, ...matchedPhones];
  });

  // Search in tablets
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
