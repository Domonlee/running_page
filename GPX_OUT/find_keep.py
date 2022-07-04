# coding=utf8
import os


def readFilename(file_dir):
  for root, dirs, files in os.walk(file_dir):
    return files, dirs, root


def findstring(pathfile):
  fp = open(pathfile, "r", encoding='UTF-8')  # 注意这里的打开文件编码方式
  strr = fp.read()
  # print strr.find("DoubleVec")
  if (strr.find("keep") != -1):
    print('here?')
    os.remove(pathfile)
    return True
  return False


def startfind(files, dirs, root):
  for ii in files:
    # print(ii)
    # if ii.endswith('.lua'):
    try:
      if (findstring(root + "/" + ii)):
        print(ii)
    except Exception as err:
      print(err)
      continue


#     for jj in dirs:
#         fi,di,ro = readFilename(root+"\\"+jj)
#         startfind(fi,di,ro)

if __name__ == '__main__':
  default_dir = u"/Volumes/850/Code/github_code/web/running_page/GPX_OUT"  # 设置默认打开目录
  print(default_dir)
  file_path = default_dir  # th.expanduser(default_dir)))
  files, dirs, root = readFilename(file_path)
  startfind(files, dirs, root)
