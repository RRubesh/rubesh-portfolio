import shutil
import os

src = r"C:\Users\91904\.gemini\antigravity-ide\brain\0278f503-b4b4-428e-9e52-e80956ecd651\media__1786347622796.jpg"
dst = r"c:\Deskop\portfolio\public\images\rubesh-logo.jpg"

if os.path.exists(src):
    shutil.copy(src, dst)
    print("Copied logo successfully to", dst)
else:
    print("Source file not found:", src)
