import pandas as pd
import sqlite3
import glob
import os

folder_path = ""
xlsx_files = glob.glob(os.path.join(folder_path, "*.xlsx"))
output = "merged-data.db"

all_data = []

for file in xlsx_files:
    print(f'[INFO] Start import: {file}')
    df = pd.read_excel(file)
    all_data.append(df)

merged_df = pd.concat(all_data, ignore_index=True)

conn = sqlite3.connect(output)
merged_df.to_sql(output, conn, if_exists='replace', index=False)
conn.close()