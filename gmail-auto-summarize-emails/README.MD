# Gmail auto summarize emails

## Summary

This feature will load n latest emails in your inbox and using the Gemini api to categorize and summarize them.

## Setup

### 1. Create your Google Project

Go to: https://script.google.com/, create your projects.

### 2. Setup code

Open your project, create files that has name is alike my files in folder **src**. You can see it at https://github.com/LeeTun2k2/work-extensions/tree/main/gmail-auto-summarize-emails/src/.

### 3. Setup the enviroment

Go to the Project settings and setup the properties:

- **GEMINI_API_KEY**: Go to https://aistudio.google.com/apikey and create one

- **GEMINI_API_MODEL**: Go to https://ai.google.dev/gemini-api/docs/models and select one. You need considering the cost.

- **MAX_FETCHED_EMAIL**: If you set it to be 100, the script will read top 100 latest email an analyze them. 

- **REPORT_TO_EMAIL**: Set an email address that you want to receive report

Example: 

```text
GEMINI_API_KEY = Alzasifbwqihfi21201j_ajsonqf9asfafk
GEMINI_API_MODEL = gemma-3n-e4b-it
MAX_FETCHED_EMAIL = 100
REPORT_TO_EMAIL = mail-receive-report@gmail.com
```

### 4. Run this script for the first time

Open your project, open file **main.gs**, then run it for the first time. Google will require you allow permissions for this script. Free free to allow all of them.

### 5. Setup a trigger to run

Open tab **Trigger** and create a new one.

In the **Select function to run**, choose **dailyReportGmail**.

In the **Deployment**, select **Head**.

Then in other fields, select the proper follow your demand.