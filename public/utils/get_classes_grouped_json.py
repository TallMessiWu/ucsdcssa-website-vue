import json
import os
from collections import defaultdict


# 把课程二维码图片存储到images里，确保每张图片都是"xxx 112.jpg"格式。
# 注意jpg要小写。如果不是小写可以跑format_JPG_to_jpg.bat（这个脚本只能在windows跑）。
# 然后跑这个程序，完成之后再重新commit、push、打包加部署就ok了。
def get_classes_grouped_json():
    files = list(os.walk("../images"))[1][2]
    courses = sorted([i.split(".")[0] for i in files])
    courses_grouped = defaultdict(list)
    [courses_grouped[i[0]].append(i) for i in courses]
    with open("../../src/assets/courses_grouped.json", "w", encoding="utf-8") as f:
        json.dump(courses_grouped, f, ensure_ascii=False)


if __name__ == '__main__':
    get_classes_grouped_json()
