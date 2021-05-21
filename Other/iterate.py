

import filecmp, fileinput, re, typing
import urllib, urllib.error, urllib.parse, urllib.request, urllib.response, urllib.robotparser
import io, os, os.path, parser, parso, parso.parser, parso.file_io, pathlib, smtpd
import http, http.client, http.cookiejar, http.cookies, http.server
import json, json.encoder, json.tool
import numbers, math, mmapfile, mmap, mimetypes
import lib

def getJSONFolders() -> int:
    dirs = 0
    dirsarr = []
    for dir in os.listdir("../Codepen-Casual/Pens/"):
        dirs += 1
        dirsarr.append({"header": dir, "link": "../" + dir + "/index.html"})
    return dirsarr

print(getJSONFolders())