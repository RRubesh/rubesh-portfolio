import shutil
import os

src = r"C:\Users\91904\.gemini\antigravity-ide\brain\e6963049-0cda-4885-be1e-b90c7151ffab\profile_photo_1786345461580.png"
dst = r"c:\Deskop\portfolio\public\images\rubesh-profile.png"

shutil.copy(src, dst)
print("Copied successfully to", dst)
