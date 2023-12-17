import cv2
import os

files = os.listdir("assets/images/wedding/wedding")

for file in files:
    im = cv2.imread("assets/images/wedding/wedding/" + file)
    h, w, c = im.shape
    if w > h:
        print(im.shape, file)
