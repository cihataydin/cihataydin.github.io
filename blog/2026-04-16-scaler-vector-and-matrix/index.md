---
slug: scaler-vector-matrix
title: Hafif Lineer Cebir
tags: [linear-algebra]
---

### Giriş

Bugünkü yazımın amacı derin öğrenme konusunda yardımcı lineer cebir önbilgileri toparlamaktır. Özet mahiyetindedir. Konumuz lineer cebirin temel taşları olan; skaler, vektör ve matristir.

<!-- truncate -->

### Skaler & Vektör
Skaler $k \in \mathbb{R}$, gerçel bir sayı ile temsil edilebilen ama yönü olmayan büyüklüktür. Vektör ise sayısal bir büyüklüğü ve yönü olan geometrik nesnedir. Geleneksel gösterim $\mathbf{v} = \begin{bmatrix} x_1 \\ ... \\ x_n \end{bmatrix}$, $x_1, ..., x_n \in \mathbb{R}$ sütun matris şeklindedir. Vektörün satır sayısı bulunduğu uzayın boyutunu belirtir öyle ki, $\mathbf{v} \in \mathbb{R}^n$ n-boyutlu reel uzayın elemanıdır.

### Vektör Toplama ve Skaler ile Çarpma
Eşleşen bileşenler toplanır. Ayrıca farklı boyutlardaki vektörler toplanamaz.
$$
\mathbf{u} + \mathbf{v}
= \begin{bmatrix} u_{x_1} \\ u_{x_2} \end{bmatrix}
+ \begin{bmatrix} v_{x_1} \\ v_{x_2} \end{bmatrix}
= \begin{bmatrix} u_{x_1} + v_{x_1} \\ u_{x_2} + v_{x_2} \end{bmatrix}
\quad
\mathbf{u},\mathbf{v} \in \mathbb{R}^{2}
$$

Bir vektörü skaler ile çarpmak; o skalerin her bileşen ile çarpılması demektir.
$$
k \cdot \mathbf{v}
= k \cdot \begin{bmatrix} v_x \\ v_y \end{bmatrix}
= \begin{bmatrix} k \, v_x \\ k \, v_y \end{bmatrix}
\quad
k \in \mathbb{R},
\quad
\mathbf{v} \in \mathbb{R}^{2}
$$

### Vektörün Uzunluğu (Norm)

Bir vektörün uzunluğu (Öklid normu) bileşenlerinin karelerinin toplamının kareköküdür:

$$\|\mathbf{v}\| = \sqrt{x_1^2 + x_2^2 + \cdots + x_n^2}$$

### Birim Vektör
Uzunluğu 1 birim olan, yani $\|\mathbf{v}\| = 1$ koşulunu sağlayan vektörlerdir. Koordinat eksenlerini temsil etmek için kullanılır.

$$\mathbf{v} = \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = x_1\begin{bmatrix} 1 \\ 0 \end{bmatrix} + x_2\begin{bmatrix} 0 \\ 1 \end{bmatrix}$$

Yukarıdaki denklem iki boyutlu uzayda bir vektörün, birim vektörler ile lineer kombinasyonuna örnektir.

### Vektör Geometrik Yorum

$x_1, ..., x_n$ koordinat eksenleri olarak adlandırılır. Her bir koordinat ekseni vektörün o eksen üzerindeki uzunluğunu ölçer. Bütün vektörler için orijin $O=(0, ... , 0) \in \mathbb{R}^n$ başlangıç noktasıdır. O halde uzaydaki her nokta başlangıç noktası orijin olan bir vektörü temsil eder.

![vektör](/img/vectors_as_points_v2.svg)

*Şekil 1: İki boyutlu uzayda vektör ve nokta eşleştirilmesine örnektir.*

### Matris

> Unfortunately, no one can be told what the Matrix is. You have to see it for yourself.
>
> — Morpheus

Matris, seçili bir baza göre bir lineer dönüşümü temsil eder. Lineer dönüşüm ise orijini sabit tutan, doğruları doğru olarak koruyan ve paralel doğruların paralelliğini bozmayan bir dönüşümdür. Formal olarak $T$ dönüşümünün lineer olması için şu iki koşulu sağlaması gerekir:

$$T(\mathbf{u}+\mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v}), \qquad T(k\mathbf{v}) = kT(\mathbf{v})$$

Bu tanım; döndürme, yansıtma, ölçeklendirme, kesme (shear) ve izdüşüm gibi işlemlerin hepsini kapsar.

$A \in \mathbb{R}^{m \times n}$ olsun. O zaman $A$ $m \times n$ boyutunda bir matristir. Burada $m$ satır, $n$ sütun boyutudur.

$$
A = \begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}
$$

### Matris Toplama ve Çarpma

$
A = 
\begin{bmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22} 
\end{bmatrix}
\quad \text{ve} \quad
B =
\begin{bmatrix}
b_{11} & b_{12} \\
b_{21} & b_{22} 
\end{bmatrix}
\quad \text{iki matris olsun.} 
$
Toplama ve çarpma işlemleri aşağıdaki gibidir.
$$
A + B =
\begin{bmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22} 
\end{bmatrix}
+
\begin{bmatrix}
b_{11} & b_{12} \\
b_{21} & b_{22}
\end{bmatrix}
=
\begin{bmatrix}
a_{11}+b_{11} & a_{12}+b_{12}\\
a_{21}+b_{21} & a_{22}+b_{22}
\end{bmatrix}
$$

$$
AB =
\begin{bmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22}
\end{bmatrix}
\begin{bmatrix}
b_{11} & b_{12} \\
b_{21} & b_{22}
\end{bmatrix}
=
\begin{bmatrix}
a_{11}b_{11} + a_{12}b_{21} & a_{11}b_{12} + a_{12}b_{22} \\
a_{21}b_{11} + a_{22}b_{21} & a_{21}b_{12} + a_{22}b_{22}
\end{bmatrix}
$$

Matris çarpımının bu şekilde tanımlanmasının altında yatan sezgi şudur: matris çarpımı, dönüşümlerin kompozisyonudur. $AB$ ifadesi, önce $B$ dönüşümünü sonra $A$ dönüşümünü uygulamak anlamına gelir. Bu sezgi, derin öğrenmede art arda gelen katmanların neden matris çarpımıyla ifade edildiğini anlamanın anahtarıdır.

### Bir Matrisin Transpozu
$\text{Bir } m \times n \text{ matris } A \text{ için transpozu } A^{\top} \text{ bir } n \times m \text{ matristir:}$

$
A = \begin{bmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23}
\end{bmatrix}
\quad \Longrightarrow \quad
A^{\top} = \begin{bmatrix}
a_{11} & a_{21} \\
a_{12} & a_{22} \\
a_{13} & a_{23}
\end{bmatrix}
$

Genel kural $(A^{\top})_{ij} = A_{ji}$.

### Simetrik Matris

Transpoz kendisine eşit olan kare matrise simetrik matris denir.

$A = A^{\top} \quad \Longleftrightarrow \quad a_{ij} = a_{ji} \quad \forall\, i, j$

Derin öğrenmede kovaryans matrisi, Hessian ve Gram matrisi gibi simetrik matrislerle sık karşılaşılır.

### Matris & Vektör Geometrik Yorum

Bir matrisin bir vektörle çarpımı, o matrisin temsil ettiği lineer dönüşümün vektöre uygulanmasıdır.
$$
\begin{bmatrix} a & b \\ c & d \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = x\begin{bmatrix} a \\ c \end{bmatrix} + y\begin{bmatrix} b \\ d \end{bmatrix} = \begin{bmatrix} ax+by \\ cx+dy \end{bmatrix}
$$

Bir örnek çözelim:
$\newline
A = \begin{bmatrix} 2 & 1 \\ 1 & 3 \end{bmatrix} \in \mathbb{R}^{2 \times 2}$ matris ve $\mathbf{v} = \begin{bmatrix} 1 \\ 1 \end{bmatrix} \in \mathbb{R}^{2}$ vektör olsun.
$$
\mathbf{v'} = A\mathbf{v} = \begin{bmatrix} 2 & 1 \\ 1 & 3 \end{bmatrix} \begin{bmatrix} 1 \\ 1 \end{bmatrix} = \begin{bmatrix} 2\cdot1 + 1\cdot1 \\ 1\cdot1 + 3\cdot1 \end{bmatrix} = \begin{bmatrix} 3 \\ 4 \end{bmatrix}
$$

Matris çarpma işlemi sonucunda oluşan yeni vektör $\mathbf{v'} = \begin{bmatrix} 3 \\ 4 \end{bmatrix}$, $\mathbf{v}$ vektörünün lineer dönüşümüdür. Yani vektör dönüştürülmüş, yönü ve büyüklüğü değişmiştir.

![matris vektör lineer dönüşüm](/img/matrix_vector_transform.svg)

*Şekil 2: Turuncu vektör $\mathbf{v}$, mavi vektör $\mathbf{v'}$ vektörünü temsil etmektedir.*

### Sonuç
Lineer cebir, bilimsel olarak araştırma yaptığımız uzayları modellemek için elimizdeki en iyi araçlardan biridir. Tüm uzayları kağıt kaleme sığdırmak herkesin harcı değildir. Okur daha da derinlere dalmak isterse, aşağıdaki kaynakları inceleyebilir.
 
Bir sonraki yazıda görüşmek üzere!
 
### Kaynaklar
1. [Dive into Deep Learning](https://d2l.ai/index.html)
2. [Essence of Linear Algebra — 3Blue1Brown](https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab)