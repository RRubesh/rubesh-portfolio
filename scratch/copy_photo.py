import shutil
import os

src = r"C:\Users\91904\.gemini\antigravity-ide\brain\0278f503-b4b4-428e-9e52-e80956ecd651\media__1786347622796.jpg"
dst = r"c:\Deskop\portfolio\public\images\rubesh-logo.jpg"

src_profile = r"C:\Users\91904\.gemini\antigravity-ide\brain\e6963049-0cda-4885-be1e-b90c7151ffab\profile_photo_1786345461580.png"
dst_profile = r"c:\Deskop\portfolio\public\images\rubesh-profile.png"

src_logo = src
dst_logo = dst

if os.path.exists(src_profile):
    shutil.copy(src_profile, dst_profile)
    print("Copied profile successfully to", dst_profile)

if os.path.exists(src_logo):
    shutil.copy(src_logo, dst_logo)
    print("Copied logo successfully to", dst_logo)
