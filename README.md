# Penjelasan Autentikasi Google
1. Inisialisasi Firebase dan Google Auth
   - Firebase diinisialisasi dengan konfigurasi proyek.
   - GoogleAuthProvider digunakan untuk menangani autentikasi Google.
2. Login dengan Google
   - Aplikasi menggunakan <i>plugin</i> Google Auth untuk membuka dialog login Google.
   - <b>idToken</b> yang diterima digunakan untuk membuat <i>credential</i> login Firebase.
3. Mengambil Data Pengguna
   - Setelah login, Firebase memantau perubahan data pengguna seperti autentikasi dengan **onAuthStateChanged**.
   - Jika login berhasil, aplikasi menyimpan data pengguna seperti **displayName**, **email**, dan **photoURL**.
4. Menampilkan Data Profil
   - Data pengguna yang telah disimpan dalam <i>state</i> aplikasi ditampilkan di halaman profil.
   - Jika **photoURL** tidak tersedia, aplikasi menggunakan avatar default.

## Alur Kerja
1. Pengguna menekan tombol "SIGN IN WITH GOOGLE".
2. Plugin Google Auth memunculkan dialog untuk login.
3. Setelah login berhasil, token dikirim ke Firebase untuk verifikasi.
4. Firebase menyimpan status login pengguna dan mengembalikan data profil.
5. Aplikasi membaca data profil dari Firebase dan menampilkannya di halaman profil.

## SS dan Penjelasannya
1. Login Page
   ![Login Page](loginpage.png)
- Pengguna memulai proses login dengan menekan tombol "SIGN IN WITH GOOGLE".
2. Pilih Akun
  ![Pilih Akun](pilihakun.png)
- Dialog Google muncul, meminta pengguna untuk memilih akun Google yang akan digunakan.
3. Konfirmasi
 ![Konfirmasi](konfirm.png)
- Setelah memilih akun, muncul dialog konfirmasi sign in dari Google.
4. Home Page
 ![Home Page](home.png)
- Halaman utama aplikasi setelah login berhasil, menampilkan fitur utama aplikasi.
5. Profile Page
  ![Profile Page](profilepage.png)
- Halaman profil yang menampilkan:
- **Nama:** diambil dari `displayName` akun Google.
- **Email:** diambil dari `email` akun Google.
- **Foto Profil:** diambil dari `photoURL` akun Google.

## Hasna Mumtazah Khairunnisa | H1D022070 | Shift E
