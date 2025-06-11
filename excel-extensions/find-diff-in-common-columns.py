import pandas as pd

file1 = ""
file2 = ""

output1 = 'file1_minus_file2.xlsx'
output2 = 'file2_minus_file1.xlsx'

# Read both Excel files
print("Reading file:", file1)
df1 = pd.read_excel(file1)

print("Reading file:", file2)
df2 = pd.read_excel(file2)

# Get common columns
common_cols = df1.columns.intersection(df2.columns)
print("Common columns:", list(common_cols))

# Keep only common columns
df1_common = df1[common_cols].copy()
df2_common = df2[common_cols].copy()

# Convert all values to lowercase strings for case-insensitive comparison
df1_common = df1_common.applymap(lambda x: str(x).strip().lower() if pd.notnull(x) else "")
df2_common = df2_common.applymap(lambda x: str(x).strip().lower() if pd.notnull(x) else "")

# Find rows in file1 not in file2
diff1 = pd.concat([df1_common, df2_common, df2_common]).drop_duplicates(keep=False)

# Find rows in file2 not in file1
diff2 = pd.concat([df2_common, df1_common, df1_common]).drop_duplicates(keep=False)

# Export the differences
print(f"file1 - file2: {len(diff1)} rows")
diff1.to_excel(output1, index=False)

print(f"file2 - file1: {len(diff2)} rows")
diff2.to_excel(output2, index=False)
