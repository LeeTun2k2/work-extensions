import pandas as pd

# Đọc file Excel
file_path = ""
output = "removed-duplicates.xlsx"

df = pd.read_excel(file_path)

# Tổng số dòng ban đầu
total_rows = len(df)
print(f"Total rows: {total_rows}")

# Tìm và lưu dòng trùng
duplicates = df[df.duplicated(keep=False)]
duplicate_rows = len(duplicates)
print(f"Duplicate rows: {duplicate_rows}")

# Xóa dòng trùng và ghi đè file gốc
df.drop_duplicates(inplace=True)
df.to_excel(output, index=False)
print(f"Rows after removing duplicates: {len(df)}")
