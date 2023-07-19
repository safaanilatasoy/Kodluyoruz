

# Yeni Bit Git Projesi Oluşturmak

```
git init
```

# Değişiklik Yapılan Dosyaları Gösteren Komut

```
git status
```

# Dosya Eklemek


```
git add .
```


# Commit İşlemi

```
git commit -m main
```


# Commitlediğimiz Dosyaları En Son Sunuzuya Kaydetmek İçin Kullanılan Komut

```
git push
```

# Commitlediğimiz Değişiklikleri Gösteren Komut

```
git log
```

# Bir Commiti Değiştirmek İçin 

Eğer yanlış bir commit atarsanız yada halihazırda commitlediğiniz bir işlemi
güncellemek isterseniz

```
// ilk başta eklemek istediklerimizi ekliyoruz
    git add . 

// Daha sonra 

    git commit --amend
```
Bu işlem sayesinde halihazırda olan commiti değiştirmiş oluyoruz. Yeni bir commit yollamamıza 
gerek kalmıyor.

## Eğer sadece başlık mesajını değiştirmek isterseniz

    ```
    git commit --amend -m *yeni mesaj*
    ```
