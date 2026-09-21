# Mini Programming Project


## 1. Group Information


**Class:** B  
**Group:** 2


### Group Members


| No. | Name | Student ID | Role |
|---|---|---|---|
| 1 | Afifah Yasmin Khairunnisa | 2610312042 | Flowchart |
| 2 | Asyiffa Zahira Meidy | 2610312043 | Algorithm |
| 3 | Rizky Bagas Setiyawan | 2610312046 | Testing & Documentation |
| 4 | Bagas Christian Manalu | 2610312062 | Project Coordinator, JavaScript |
| 5 | Amala Fianka Kayleen | 2610312070 | README |


---


## 2. Project Title


**Cashier Shopping System**  
*Program Kasir Belanja*


---


## 3. Project Description


This program is an interactive cashier system designed to:


- Record shopping items
- Calculate item totals based on volume discounts
- Calculate the overall bill
- Handle payment verification
- Generate a formatted shopping receipt


---


## 4. Objectives


This project is designed to apply the following programming concepts:


- **Variables & Global Objects**
- **Data Types:** String, Number
- **Operators:** Arithmetic, Comparison, Logical
- **Conditional Statements:** `if...else if...else`
- **Loops:** `while`, `for`
- **Input Validation & Exception Handling:** `isNaN`, string trim/check
- **Algorithms**
- **JavaScript**


---


## 5. Input


The program receives:


- **Item name** (`Nama barang`)
- **Item quantity** (`Jumlah barang`)
- **Unit price** (`Harga satuan barang`)
- **Amount paid by customer** (`Uang yang diberikan`)


---


## 6. Process


### 1. Item Entry Loop


- Validates item name to ensure it is not empty.
- Accepts entry until the word **`"selesai"`** is entered.
- Validates quantity to ensure it is a positive integer.
- Validates unit price to ensure it is a positive number.


### 2. Discount Calculation (Per Item)


- Calculates base total: `quantity × price`
- Applies discount based on subtotal:


| Subtotal | Discount |
|---|---:|
| < Rp50.000 | **0%** |
| Rp50.000 – Rp99.999 | **5%** |
| ≥ Rp100.000 | **10%** |


- Calculates the final price per item after discount.
- Adds the final price to the overall total (`totalBelanja`).


### 3. Payment Processing


- Prompts for customer payment amount.
- Validates that the payment amount is a number and is greater than or equal to the grand total.
- Calculates change/returned money:


`uangKembalian = uangDikasih - totalBelanja`


---


## 7. Output


The program displays:


- **Subtotal, discount percentage, and final price** per item during data entry.
- **Validation warning messages** for incorrect inputs.
- A **styled final shopping receipt** containing:
  - List of purchased items with their final prices
  - **Grand total** (`TOTAL`)
  - **Total cash paid** (`UANG DIBERIKAN`)
  - **Total change returned** (`UANG KEMBALIAN`)


---


## 8. Algorithm


The algorithm used in the program is described in:


`pseudocode.txt`


---


## 9. Flowchart


The flowchart is created using **Flowgorithm**.


**File:** `flowchart.fprg`


---


## 10. JavaScript Implementation


The JavaScript implementation of the program is available in:


`cashierprogram.js`


---


## 11. Testing


The program is tested using several test scenarios.


**Testing documentation:** `test-cases.md`
