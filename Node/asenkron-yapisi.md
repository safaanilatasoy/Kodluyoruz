# Asenkron Yapısı 


## Senkron Programlama (Syncronous Programming)

* Senkron programşama en basit tanımıyla işlemlerin sırasıyla yapılmasıdır. Bir işlem yapılırken diğer işlem bloklanır.

## Asenkron Programlama (Asynchronous Programming)

* Uzun süren işlemi beklemeden diğer işlemlere devam edebimektir, işlemlerin sırasıyla devam etme zorunluluğu yoktur. Bir işlem yapılırken diğer işlem bloklanmaz


## Olay Döngüsü (Event-Loop)

* Event-Loop, callback, single thread

* Restoranımız çalışma ortamı ve yalnızca tek bir garson çalışıyor. (Single Thread)
* Bu garson önce 1. masaya ait siparişleri aldı ve siparişi mutfağa bildirdi (Thread Pool)
* O siparişlerin hazır olmasını beklemeden (Non-Blocking) 2. masaya ait siparişleri aldı ve yine mutfağa bildirdi.
* Bu sırada kendisine 1. masanın yemeğinin hazır olduğu bildirildi(callback)