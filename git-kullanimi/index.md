# Git Komutları

## Yeni Bit Git Projesi Oluşturmak

```
git init
```

## Değişiklik Yapılan Dosyaları Gösteren Komut

```
git status
```

## Dosya Eklemek


```
git add .
```


## Commit İşlemi

```
git commit -m main
```


## Commitlediğimiz Dosyaları En Son Sunucuya Kaydetmek İçin Kullanılan Komut

```
git push
```

## Commitlediğimiz Değişiklikleri Gösteren Komut

```
git log
```

## Bir Commiti Değiştirmek İçin

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

### Eğer sadece başlık mesajını değiştirmek isterseniz

    git commit --amend -m *yeni mesaj*


## Yanlış Bir Commit Yaparsanız O Commit'i Silmek İçin

```
git revert <Commit ID'nin En Az 7 Karakteri>
```

## Farklılıkları Gösteren Komut

```
git diff <commit ID1>..<commitID2> <Dosya ismi>
```



## Varolan Branchleri Görmek için

```
 git branch
```

## Yeni Bir Branch Oluşturmak İçin

```
 git branch <branch ismi>
```
### Oluşturduğumuz Branch'i Geçiş Yapmak İçin

```
git checkout <oluşturulan branch'in ismi>
```
### Kısayol

Bu komutla direkt olarak bir branch oluşturur ve o branch e geçiş yapar

```
git checkout -b <branch ismi>
```
## Oluşturulan Branch'i Silmek için

```
git branch -D <silmek istediğiniz branch ismi>
```

## Yeni Bir Dosya Oluşturmak İçin

```
touch <oluşturmak istediğimiz dosya ismi>

// Örnek ---> touch index.html
```

## Git Stash

Son committen itibaren yaptığımız tüm commitler stash içinde saklanır

### Git Stash Listesini Görmek

```
git stash list
```

### Git Stash Listesini Temizlemek

```
git stash clear
```

```
// Listeden kaldırır
git stash pop
```

```
// Değişkliklikleri uygular fakat listeden kaldırmaz
git stash apply 
```
## Branchlardaki Değişiklikleri Ana Dosyaya Taşımak

### Merge işlemi
    Bu işlemle birlikte iki branch'ı birleştirmiş oluyoruz

```
    git merge <brach1> <branch2>
```

```
// Bize commit yapma şansı veriyor.
 git merge --squash <branchName>
```
## Rebase İşlemi

// Değişiklikleri sanki o branch üzerinde yapılmış gibi gösterir ve commit tarihçesinde bunları göstermez

```
git rebase <branchName>
```
touch <oluşturmak istediğimiz dosya ismi>

// Örnek ---> touch index.html
```

## Git Stash

Son committen itibaren yaptığımız tüm commitler stash içinde saklanır

### Git Stash Listesini Görmek

```
git stash list
```

### Git Stash Listesini Temizlemek

```
git stash clear
```

```
// Listeden kaldırır
git stash pop
```

```
// Değişkliklikleri uygular fakat listeden kaldırmaz
git stash apply 
```
