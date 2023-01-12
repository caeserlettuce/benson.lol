
from PIL import Image, ExifTags
import os
from PIL.ExifTags import TAGS, GPSTAGS
import exiftool

import atexit
from googletrans import Translator
import pyperclip
import json
from jsoncomment import JsonComment




def message(text):
    haha = open("server_message.txt", "w")
    haha.write(text)
    haha.close()


def heehee(datajson):

# >>> from googletrans import Translator
# >>> translator = Translator()
# >>> translator.translate('안녕하세요.')
# # <Translated src=ko dest=en text=Good evening. pronunciation=Good evening.>
# >>> translator.translate('안녕하세요.', dest='ja')
# # <Translated src=ko dest=ja text=こんにちは。 pronunciation=Kon'nichiwa.>
# >>> translator.translate('veritas lux mea', src='la')
# # <Translated src=la dest=en text=The truth is my light pronunciation=The truth is my light>




    print(datajson)

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

        message("processing images...")

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
        


        filenametm = image_in.replace("in/", "")

        out_name = datajson[filenametm]["name"]
        print("saving image...")

        final_image = image_without_exif.resize((604, 604))
        final_image.save("out/" + out_name + '.png', exif=exiftm)
        #image_without_exif.save("out/" + out_name + '.png', exif=exiftm)


    cac_file = open('name_cache.txt')

    cac_cont = cac_file.readlines()

    cac_full = cac_file.read()

    #print("he")
    #print(cac_full)

    cac_add = "" # only add this after everything is saved so that it doesnt screw up the cache

    #print(cac_cont)

    name_cac = {}


    def generateNameCache():
        print("generating name cache...")
        message("generating name cache...")
        for name in cac_cont:
            name = name.replace("\n", "")
            #print("doing name '" + name + "'")
            name = removeNum(name)
            #print("remobd nums: '" + name + "'")
            if (checkKey(name_cac, name) == False):
                #print("doesnt exist!!")
                name_cac[name] = 1
            else :
                #print("does exist!!")
                name_cac[name] = name_cac[name] + 1




    generateNameCache()

    print(name_cac)


    fij = []

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
        file_int = 0
        for filename in os.listdir("in"):
            if filename.endswith(".png") or filename.endswith(".PNG") or filename.endswith(".jpg") or filename.endswith(".JPG"): 
                # print(os.path.join(directory, filename))

                message("processing metadata for: " + filename)

                print("current image: " + filename)
                desc = datajson[filename]["description"]
                date = datajson[filename]["date"]
                loca = datajson[filename]["location"]
                getl = datajson[filename]["geo"]
                custom_geoloc = False

                if getl == "":
                    getl = "y"
                elif getl == "0,0":
                    getl = "n"
                else:
                    custom_geoloc = True
                    


                lati = 0
                long = 0

                if (getl == "y"):
                    print("ok lmao getting the thing")
                    message("ok lmao getting the thing")
                    dad_exif = exiftool.WalkDir("in/" + filename)
                    #print(dad_exif)
                    if (checkKey(dad_exif["in/" + filename][0], "GPSLatitude") == True):
                        lati = dad_exif["in/" + filename][0]["GPSLatitude"].replace(" N", "").replace(" S", "").replace(" E", "").replace(" W", "")
                    if (checkKey(dad_exif["in/" + filename][0], "GPSLongitude") == True):
                        long = dad_exif["in/" + filename][0]["GPSLongitude"].replace(" N", "").replace(" S", "").replace(" E", "").replace(" W", "")

                    print(lati)
                    print(long)
                if (custom_geoloc == True):
                    lati = getl.split(",")[0]
                    long = getl.split(",")[1]

                #date = "hello"
                print("ok thank you")
                message("ok thank you")
            
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

                message("doing the funny metadata...")

                fij.append(
                        {
                            "img": "",
                            "date": "",
                            "text": {},
                            "location": {},
                            "ltlo": []
                        }
                    )

                fij[file_int]["img"] = "../img/" + datajson[filename]["name"] + ".png"
                fij[file_int]["date"] = date
                fij[file_int]["text"]["en"] = desc
                lang_num = 0
                for egg in languages:

                    print("translating to: " + egg)
                    message("translating to: " + egg)
                    off = egg
                    if off == "sp":
                        off = "es"
                    elif off == "jp":
                        off = "ja"
                    elif off == "pi":
                        off = "en"
                    try:
                        fij[file_int]["text"][egg] = str(trans.translate(desc, dest=off).text)
                    except:
                        print("woops translation didnt work")
                        message("woops translation didnt work")
                        fij[file_int]["text"][egg] = "[translation error] " + desc

                    lang_num = lang_num + 1
                
                
                fij[file_int]["location"]["en"] = loca
                
                lang_num = 0
                for eggs in languages:
                    print("translating to: " + eggs)
                    message("translating to: " + eggs)
                    offs = eggs
                    if offs == "sp":
                        offs = "es"
                    elif offs == "jp":
                        offs = "ja"
                    elif offs == "pi":
                        offs = "en"
                    try:
                        fij[file_int]["location"][eggs] = str(trans.translate(loca, dest=offs).text)
                    except:
                        print("woops translation didnt work")
                        message("woops translation didnt work")
                        fij[file_int]["text"][egg] = "[translation error] " + loca

                try:
                    lati = float(lati)
                except:
                    lati = 0
                try:
                    long = float(long)
                except:
                    long = 0

                fij[file_int]["ltlo"] = [lati, long]


            file_int += 1
        for filename in os.listdir("in"):
            if filename.endswith(".png") or filename.endswith(".PNG") or filename.endswith(".jpg") or filename.endswith(".JPG"): 

                message("stripping metadata from " + filename + "...")
                print("stripping metadata from " + filename + "...")
                obama(os.path.join("in", filename))

        print(fij)
        

        flili = open("name_cache.txt", "a")

        flili.write(cac_add)

        print("done!")

        return fij
        # scale image to 604x604px

#print(heehee({"DSCN3397.JPG": {"name": "b_record_1", "description": "record 1", "location": "wee", "date": "14.12.2022", "geo": "13,5"}, "DSCN3398.JPG": {"name": "b_record_2", "description": "record 1", "location": "wee", "date": "15.12.2022", "geo": "13,5"}}))

    #[
    #    {
    #        "img": "../img/b_donkey_everson.png",
    #        "date": "11.09.2022",
    #        "text": {
    #            "en": "benson found donkey"
    #        },
    #        "location": {
    #            "en": "your moms houes"
    #        },
    #        "ltlo": [
    #            "400",
    #            "400"
    #        ]
    #    }
    #]