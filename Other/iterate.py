import os

def getJSONFolders() -> int:
    dirs = 0
    dirsarr = []
    for dir in os.listdir("../Codepen-Casual/Pens/"):
        dirs += 1
        dirsarr.append({"header": dir, "link": "/Pens/" + dir + "/index.html"})
    return dirsarr

print(getJSONFolders())