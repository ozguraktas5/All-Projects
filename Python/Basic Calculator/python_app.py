# define the functions needed: add, sub, mul, div
# print options to the user
# ask for values
# call the functions
# while loop to continue the program until the user wants to exit

""" soru = input("Hesaplama yapmak ister misin ? (yes or no)")

while soru == "yes":
    print("1.Toplama")
    print("2.Cikarma")
    print("3.Carpma")
    print("4.Bolme")
    print("5.Çikis")
    
    sayi1 = int(input("Birinci sayi:"))
    sayi2 = int(input("İkinci sayi:"))
    islem = input("1 / 2 / 3 / 4 / 5 :")
    
    if islem == "1":
        sonuc = (sayi1 + sayi2)
    elif islem == "2":
        sonuc = (sayi1 - sayi2)
    elif islem == "3":
        sonuc = (sayi1 * sayi2)
    elif islem == "4":
        sonuc = (sayi1 / sayi2)
    elif islem == "5":
        break
    print(f"Sonuc: {sonuc}") """
    
def topla(a,b):
    cevap = a+b
    print(str(a) + "+" + str(b) + "=" + str(cevap) + "\n")

def cikar(a,b):
    cevap = a-b
    print(str(a) + "-" + str(b) + "=" + str(cevap) + "\n")
    
def carp(a,b):
    cevap = a*b
    print(str(a) + "*" + str(b) + "=" + str(cevap) + "\n")
    
def bol(a,b):
    cevap = a/b
    print(str(a) + "/" + str(b) + "=" + str(cevap) + "\n")
    
while True:
    print("1.Toplama")
    print("2.Cikarma")
    print("3.Carpma")
    print("4.Bolme")
    print("5.Cikis")
    
    secim = input("Seciminiz: 1 / 2 / 3 / 4 / 5 : ")
    
    if secim == "1":
        print("Toplama")
        sayi1 = int(input("Sayi:"))
        sayi2 = int(input("Sayi:"))
        topla(sayi1,sayi2)
    elif secim == "2":
        print("Cikarma")
        sayi1 = int(input("Sayi:"))
        sayi2 = int(input("Sayi:"))
        cikar(sayi1,sayi2)
    elif secim == "3":
        print("Carpma")
        sayi1 = int(input("Sayi:"))
        sayi2 = int(input("Sayi:"))
        carp(sayi1,sayi2)
    elif secim == "4":
        print("Bolme")
        sayi1 = int(input("Sayi:"))
        sayi2 = int(input("Sayi:"))
        bol(sayi1,sayi2)
    elif secim == "5":
        print("Cikis yapildi")
        quit()
    

    

