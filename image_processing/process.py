
from PIL import Image, ExifTags
import os
from PIL.ExifTags import TAGS, GPSTAGS
import exiftool

from googletrans import Translator
import pyperclip


# >>> from googletrans import Translator
# >>> translator = Translator()
# >>> translator.translate('안녕하세요.')
# # <Translated src=ko dest=en text=Good evening. pronunciation=Good evening.>
# >>> translator.translate('안녕하세요.', dest='ja')
# # <Translated src=ko dest=ja text=こんにちは。 pronunciation=Kon'nichiwa.>
# >>> translator.translate('veritas lux mea', src='la')
# # <Translated src=la dest=en text=The truth is my light pronunciation=The truth is my light>

trans = Translator()

def checkKey(dict, key):
    
    if key in dict:
        return True
    else:
        return False
  
def removeNum(strimg):
    outy = strimg
    outy = outy.replace("0", "")
    outy = outy.replace("1", "")
    outy = outy.replace("2", "")
    outy = outy.replace("3", "")
    outy = outy.replace("4", "")
    outy = outy.replace("5", "")
    outy = outy.replace("6", "")
    outy = outy.replace("7", "")
    outy = outy.replace("8", "")
    outy = outy.replace("9", "")
    return outy


def obama(image_in):
    image = Image.open(image_in)

    for orientation in ExifTags.TAGS.keys():
            if ExifTags.TAGS[orientation]=='Orientation':
                break
        
    exif = image._getexif()

    # figure out why pil exif thing isnt getting the location data for some reason, but it's there, the default dolphin details thing has the location data



    if (checkKey(exif, orientation) == True):

        if exif[orientation] == 3:
            image=image.rotate(180, expand=True)
        elif exif[orientation] == 6:
            image=image.rotate(270, expand=True)
        elif exif[orientation] == 8:
            image=image.rotate(90, expand=True)

    #data = gpsphoto.getGPSData(os.getcwd() + image_in)

    #print(data)


    # next 3 lines strip exif
    data = list(image.getdata())
    image_without_exif = Image.new(image.mode, image.size)
    image_without_exif.putdata(data)


    exiftm = image_without_exif.getexif()
    exiftm[0x9286] = "IMAGE FROM https://benson.lol THIS IMAGE IS COPYRIGHT OF BENSON.LOL!!!!!"
    


    out_name = image_in.replace("in/", "").replace(".png", "").replace(".PNG", "").replace(".jpg", "").replace(".JPG", "")
    print("saving image...")

    final_image = image_without_exif.resize((604, 604))
    final_image.save("out/" + out_name + '.png', exif=exiftm)
    #image_without_exif.save("out/" + out_name + '.png', exif=exiftm)


cac_file = open('name_cache.txt')

cac_cont = cac_file.readlines()

cac_full = cac_file.read()

print("he")
print(cac_full)

cac_add = "" # only add this after everything is saved so that it doesnt screw up the cache

print(cac_cont)

name_cac = {}


def generateNameCache():
    print("generating name cache...")
    for name in cac_cont:
        name = name.replace("\n", "")
        print("doing name '" + name + "'")
        name = removeNum(name)
        print("remobd nums: '" + name + "'")
        if (checkKey(name_cac, name) == False):
            print("doesnt exist!!")
            name_cac[name] = 1
        else :
            print("does exist!!")
            name_cac[name] = name_cac[name] + 1




generateNameCache()

print(name_cac)


final_img_json = ""

languages = [   # all languages for the thing
    "no",
    "fr",
    "it",
    "sp",
    "de",
    "jp",
    "pi"
]

poopy = True

if (poopy == True):
    for filename in os.listdir("in"):
        if filename.endswith(".png") or filename.endswith(".PNG") or filename.endswith(".jpg") or filename.endswith(".JPG"): 
            # print(os.path.join(directory, filename))

            print("current image: " + filename)
            desc = input("gimme description for image!!!")
            date = input("when was the photo taken!!!!!!!!!")
            loca = input("WHERE was the photo taken!!!!!!!!!!!!!!!!!")
            getl = input("do you want it to save the actual geolocation?????? (y/n)")

            lati = 0
            long = 0

            if (getl == "y"):
                print("ok lmao getting the thing")
                dad_exif = exiftool.WalkDir("in/" + filename)
                #print(dad_exif)
                if (checkKey(dad_exif["in/" + filename][0], "GPSLatitude") == True):
                    lati = dad_exif["in/" + filename][0]["GPSLatitude"].replace(" N", "").replace(" S", "").replace(" E", "").replace(" W", "")
                if (checkKey(dad_exif["in/" + filename][0], "GPSLongitude") == True):
                    long = dad_exif["in/" + filename][0]["GPSLongitude"].replace(" N", "").replace(" S", "").replace(" E", "").replace(" W", "")

                print(lati)
                print(long)


            #date = "hello"
            print("ok thank you")
        
            #obama(os.path.join("in", filename))

            img_name = filename.replace("in/", "").replace(".PNG", ".png").replace(".jpg", ".png").replace(".JPG", ".png")
            
            # final_img_json = final_img_json + 


            # do funky filename stuff

            numRom = removeNum(img_name.replace(".png", ""))

            print(img_name + " " + numRom)



            if (checkKey(name_cac, numRom) == True):
                numby = name_cac[numRom] + 1
                img_name = numRom + str(numby) + ".png"
            cac_add = cac_add + img_name.replace(".png", "") + "\n"
            print(img_name)



            final_img_json = final_img_json + '{\n    "img": "../img/' + img_name + '",\n    "date": "' + date + '",\n    "text": {\n'
            final_img_json = final_img_json + '        "en": "' + desc + '",\n'
            lang_num = 0
            for egg in languages:
                print("translating to: " + egg)
                off = egg
                if off == "sp":
                    off = "es"
                elif off == "jp":
                    off = "ja"
                elif off == "pi":
                    off = "en"
                if lang_num < len(languages) - 1:
                    final_img_json = final_img_json + '        "' + egg + '": "' + trans.translate(desc, dest=off).text + '",\n'
                else:
                    final_img_json = final_img_json + '        "' + egg + '": "' + trans.translate(desc, dest=off).text + '"\n'

            lang_num = lang_num + 1
            
            
            final_img_json = final_img_json + '    },\n    "location": {\n'
            final_img_json = final_img_json + '        "en": "' + loca + '",\n'
            lang_num = 0
            for eggs in languages:
                print("translating to: " + eggs)
                offs = eggs
                if offs == "sp":
                    offs = "es"
                elif offs == "jp":
                    offs = "ja"
                elif offs == "pi":
                    offs = "en"
                if lang_num < len(languages) - 1:
                    final_img_json = final_img_json + '        "' + eggs + '": "' + trans.translate(loca, dest=offs).text + '",\n'
                else:
                    final_img_json = final_img_json + '        "' + eggs + '": "' + trans.translate(loca, dest=offs).text + '"\n'

                lang_num = lang_num + 1

            final_img_json = final_img_json + '    },\n    "ltlo": [' + str(lati)  + ', ' + str(long) + ']\n},\n'

    for filename in os.listdir("in"):
        if filename.endswith(".png") or filename.endswith(".PNG") or filename.endswith(".jpg") or filename.endswith(".JPG"): 

            print("stripping metadata from " + filename + "...")
            obama(os.path.join("in", filename))

    print(final_img_json)
    pyperclip.copy(final_img_json)

    flili = open("name_cache.txt", "a")

    flili.write(cac_add)

    print("done!")

    # scale image to 604x604px


