# Timestamp Microservice

## Overview

This project is a Timestamp Microservice API built using Node.js and Express. It provides endpoints to handle and respond with Unix timestamps and UTC dates. The API can process both Unix timestamps and ISO 8601 date strings.

## Endpoints

### `/api/:date?`

- **Method**: GET
- **Description**: Returns a JSON object with the Unix timestamp and UTC date string of the provided date.
- **Parameters**:
  - `date` (optional): A Unix timestamp or an ISO 8601 date string.
- **Responses**:
  - **Valid Date**:
    ```json
    {
      "unix": 1451001600000,
      "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
    }
    ```
  - **Invalid Date**:
    ```json
    {
      "error": "Invalid Date"
    }
    ```
  - **No Date Provided**:
    ```json
    {
      "unix": <current_timestamp>,
      "utc": <current_utc_date_string>
    }
    ```

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd timestamp-microservice
   ```
