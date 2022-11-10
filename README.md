# Görev

Projede data.json isimli dosyada bir dizi bulunmaktadır.Bu dizi bir şirketin yazılım departmanına başvuran adayların ve case maillerinin gönderilme bilgilerini barındırmaktadır. Property anlamları şu şekildedir;

**name:** Kişinin ismi

**mailReceivedDate:** Case'in adaya şirket tarafından gönderildiği tarih

**solutionSentDate:** Adayın case çözümünü şirkete geri gönderdiği tarih (Bu alan boş olabilmektedir)

**isBackgroundColorRed:** Çizilecek olan tabloda ilgili satırının arka plan renginin kırmızı olup olmadığı bilgisi

Birinci olarak beklenen data.json daki veriler ile App.tsx sayfasında bir tablo gösterilmesidir. Bu tabloyu oluştururken grid isimli bir component yazıp, source isimli bir prop ile ilgili dataList verisini component içine aldıktan sonra componentin return edildiği yerde aşağıdaki html yapısında bir sonuç dönmesini bekliyoruz.
(Burada background-color:'red' stili sadece isBackgroundColorRed : true olan satırlarda beklenmektedir.)
Grid componentinin örnek kullanım şekli App.tsx sayfasında 16. satırda commentli olarak verilmiştir.

...grid.tsx

![image](https://user-images.githubusercontent.com/13540684/198149139-b1a80fe3-7db2-4984-8a09-968bb0c48599.png)

Grid componenti tamamlandıktan sonra ekranda aşağıdaki şekilde bir tablo görüntülenebilmelidir.

![image](https://user-images.githubusercontent.com/13540684/198155000-d55faa92-6cb2-4a1a-83e4-89ea8fd70904.png)

**function control(today:Date, limit:number) => number;**

İkinci aşama olarak App.tsx sayfasında boş olarak tanımlanmış olan control isimli fonksiyonun içeriğinin doldurulması beklenmektedir. Datalist verisi kullanılmadan sayfaya yazdırılmış olan html table'dan javascript fonksiyonları kullanılarak veriler çekilecek ve bu veriler üzerinde çeşitli kontroller yapılacaktır.

Adayın case in çözümünü gönderdiği tarih ile case in adaya ulaştığı tarih arasındaki gün sayısının hesaplanması ve bu gün sayısı limit parametresinden büyükse ilgili satırın kırmızı arkaplan rengine sahip olması gerekmektedir. Bazı satırlar bu duruma uymamaktadır. Case çözümünün teslim edildiği tarihin boş olduğu yerlerde teslim tarihin "today" isimli parametre değeri olarak varsayılması gerekmektedir.

Bu kabüllere göre fonksiyon sonucu olarak; kaç satırda yanlış renkte arkaplan olduğunun sayısı dönmelidir.

Örnek;

Fonksiyona parametre olarak today = 2021-10-06, limit = 5 gönderdiğimizi varsayalım.

1. satır için teslim tarihi olmadığı için today parametresi kullanılacak ve aradaki gün farkı 5 olacak.( 5 olduğu için kırmızı olmamalı)
2. satır için gün farkı 9 olacak ( 5 den fazla olduğu için kırmızı olmalı)
3. satır için gün farkı 4 olacak ( 5 den az olduğu için kırmızı olmamalı)

Burada hatalı boyanmış satır sayısı 1 dir. control fonksiyonu 1 cevabını dönmelidir.

![image](https://user-images.githubusercontent.com/13540684/198152689-652be67f-ecb8-4119-8ac7-44538d9f37bb.png)

Not: Tarihler ISO 8601 formatındadır.
