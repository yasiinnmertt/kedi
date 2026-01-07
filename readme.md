# 🐱 Kedi Bilgi Dünyası (Cat Fact World)

Bu proje, **Catfact.ninja API** servisini kullanarak rastgele kedi bilgileri çeken, bu bilgileri otomatik olarak Türkçeye çeviren ve kullanıcıya modern bir kart tasarımıyla sunan bir web uygulamasıdır.

Proje, JavaScript'te **Fetch API**, **Async/Await** yapıları ve **DOM manipülasyonu** konularını pekiştirmek amacıyla geliştirilmiştir.

## 🚀 Özellikler

-   **API Entegrasyonu:** `https://catfact.ninja/fact` adresinden anlık veri çekimi.
-   **Otomatik Çeviri:** İngilizce gelen veriler, Google Translate servisi kullanılarak anlık olarak Türkçeye çevrilir.
-   **Karanlık/Aydınlık Mod (Dark Mode):** Kullanıcı tercihine göre tema değiştirme özelliği.
-   **Koşullu Sorgu:** Kullanıcı arama kutusuna sadece **"kedi"** yazdığında veri getirilir.
-   **Responsive Tasarım:** CSS Grid kullanılarak tüm cihazlara uyumlu kart yapısı.
-   **Detay Görünümü:** Kartlara tıklandığında bilginin tamamını gösteren özel detay ekranı.

## 🛠️ Kullanılan Teknolojiler

-   **HTML5:** Semantik yapı.
-   **CSS3:** CSS Variables (Değişkenler), Flexbox, Grid Layout ve Animasyonlar.
-   **JavaScript (ES6+):** Fetch API, Asenkron Fonksiyonlar, Event Listener'lar.

## 📂 Kurulum ve Çalıştırma

Bu projeyi bilgisayarınızda çalıştırmak için herhangi bir kuruluma ihtiyacınız yoktur. Tarayıcınız olması yeterlidir.

1.  Bu projeyi bilgisayarınıza indirin (veya `git clone` yapın).
2.  Klasör içindeki `Index.html` dosyasına çift tıklayın.
3.  Proje tarayıcınızda açılacaktır.

## 📖 Nasıl Kullanılır?

1.  **Bilgi Getirme:** "Bilgi Bul" bölümündeki kutucuğa **`kedi`** yazın (küçük harflerle).
2.  **Butona Basma:** "BİLGİ GETİR" butonuna tıklayın.
3.  **Sonuç:** Her tıklamada API'den yeni bir bilgi çekilir ve listeye eklenir.
4.  **Detay:** Gelen kartın üzerine tıklayarak bilginin detayını görebilirsiniz.
5.  **Tema:** Sağ üstteki butona tıklayarak Koyu/Açık mod arasında geçiş yapabilirsiniz.

## 📂 Dosya Yapısı

```text
/
├── Index.html      # Ana HTML sayfası 
├── script.js    # Tüm API ve çalışma mantığını içeren JS dosyası
└── README.md       # Proje dokümantasyonu
└──style.css      # Ana CSS kodları