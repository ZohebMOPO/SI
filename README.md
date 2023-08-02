# API Architecture Readme

This document provides an overview of the API architecture for the announcements service. The API is designed to provide access to various types of announcements related to different companies. It allows users to retrieve general announcements, critical announcements, and announcements within specific date ranges.

## Base URL

The base URL for accessing the API is: `https://stockinsights-rosy.vercel.app/`

## Endpoints

The API provides the following endpoints:

### 1. Get Announcements

#### Endpoint: `GET /api/announcements`

- Description: Retrieve all announcements available in the system.
- Response: Returns an array of announcement objects.

#### Endpoint: `GET /api/announcements?SCRIP_CD={number}`

- Description: Retrieve announcements for a specific company identified by its SCRIP_CD.
- Query Parameters:
  - `SCRIP_CD` (number): The unique identifier for the company.
- Response: Returns an array of announcement objects specific to the given company.

### 2. Get Critical Announcements

#### Endpoint: `GET /api/critical`

- Description: Retrieve all critical announcements available in the system.
- Response: Returns an array of critical announcement objects.

#### Endpoint: `GET /api/critical?SCRIP_CD={number}`

- Description: Retrieve critical announcements for a specific company identified by its SCRIP_CD.
- Query Parameters:
  - `SCRIP_CD` (number): The unique identifier for the company.
- Response: Returns an array of critical announcement objects specific to the given company.

### 3. Get Announcements within Specific Period and Date

#### Endpoint: `GET /api/period?SCRIP_CD={number}?SD={date}?ED={date}`

- Description: Retrieve announcements within a specific date range and for a specific company.
- Query Parameters:
  - `SCRIP_CD` (number): The unique identifier for the company (optional).
  - `SD` (date): Start date of the period in ISO format (e.g., `2023-08-01`) (optional).
  - `ED` (date): End date of the period in ISO format (e.g., `2023-08-31`) (optional).
- Response: Returns an array of announcement objects within the specified date range and for the given company.

**Note**: The `/api/period` endpoint expects dates in UTC format (ISO 8601 with 'Z' at the end, e.g., `2023-08-01T00:00:00Z`). If the dates in the provided data (NEWS_DT) do not have 'Z' at the end, the endpoint may not function correctly. Ensure that the dates are in the correct format for accurate results.
