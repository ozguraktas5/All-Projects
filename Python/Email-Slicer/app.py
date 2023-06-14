def email():
    print("Email dilimleyici başlatılıyor")
    print("")

    input_email = input("Lütfen mail adresinizi giriniz: ")

    (ilk_kisim, ortanca_kisim) = input_email.split("@")
    (ortanca_kisim, son_kisim) = ortanca_kisim.split(".")
    
    print(f"İlk kisim: {ilk_kisim}")
    print(f"Ortanca kisim: {ortanca_kisim}")
    print(f"Son kisim: {son_kisim}")

while True: 
    email()
