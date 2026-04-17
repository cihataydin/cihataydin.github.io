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
u,v \in \mathbb{R}^{2x1}
$$

Bir vektörü skaler ile çarpmak; o skalerin her bileşen ile çarpılması demektir.
$$
k \cdot \mathbf{v}
= k \cdot \begin{bmatrix} v_x \\ v_y \end{bmatrix}
= \begin{bmatrix} k \, v_x \\ k \, v_y \end{bmatrix}
\quad
k \in \mathbb{R},
\quad
v \in \mathbb{R}^{2x1}
$$

### Birim Vektör
Uzunluğu 1 birim olan vektörlerdir. Koordinat eksenlerini temsil etmek için kullanılır.

$$\mathbf{v} = \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = x_1\begin{bmatrix} 1 \\ 0 \end{bmatrix} + x_2\begin{bmatrix} 0 \\ 1 \end{bmatrix}$$

Yukarıdaki denklem iki boyutlu uzayda bir vektörün, birim vektörler ile lineer kombinasyonuna örnektir.

### Vektör Geometrik Yorum

$x_1, ..., x_n$ koordinat eksenleri olarak adlandırılır. Her bir koordinat ekseni vektörün o eksen üzerindeki uzunluğunu ölçer. Bütün vektörler için orijin $O=(0, ... , 0) \in \mathbb{R}^n$ başlangıç noktasıdır. O halde uzaydaki her nokta başlangıç noktası orijin olan bir vektörü temsil eder.

![vektör](/img/vectors_as_points_v2.svg)

*Şekil 1: İki boyutlu uzayda vektör ve nokta eşleştirilmesine örnektir.*

### Matris

Matris lineer bir dönüşümdür. Lineer dönüşüm ise uzaydaki noktaları/şekilleri ölçeklendiren bir işlemdir. $A \in \mathbb{R}^{m \times n}$ olsun. O zaman $A$ $m \times n$ boyutunda bir matristir. Burada $m$ satır, $n$ sütun boyutudur.

$$
A = \begin{bmatrix}
a_1^1 & a_2^1 & \cdots & a_n^1 \\
a_1^2 & a_2^2 & \cdots & a_n^2 \\
\vdots & \vdots & \ddots & \vdots \\
a_1^m & a_2^m & \cdots & a_n^m
\end{bmatrix}
$$

> Unfortunately, no one can be told what the Matrix is. You have to see it for yourself.
>
> — Morpheus

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

### Matris & Vektör Geometrik Yorum

Matris ve vektörün çarpımını, o matrisin vektör üzerine uygulanan lineer bir dönüşümdür.
$$
\begin{bmatrix} a & b \\ c & d \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = x\begin{bmatrix} a \\ c \end{bmatrix} + y\begin{bmatrix} b \\ d \end{bmatrix} = \begin{bmatrix} ax+by \\ cx+dy \end{bmatrix}
$$

Bir  örnek çözelim:
$\newline
A = \begin{bmatrix} 2 & 1 \\ 1 & 3 \end{bmatrix} \in \mathbb{R}^{2x2}$ matris ve $\mathbf{v} = \begin{bmatrix} 1 \\ 1 \end{bmatrix} \in \mathbb{R}^{2x1}$ vektör olsun.
$$
\mathbf{v'} = A\mathbf{v} = \begin{bmatrix} 2 & 1 \\ 1 & 3 \end{bmatrix} \begin{bmatrix} 1 \\ 1 \end{bmatrix} = \begin{bmatrix} 2\cdot1 + 1\cdot1 \\ 1\cdot1 + 3\cdot1 \end{bmatrix} = \begin{bmatrix} 3 \\ 4 \end{bmatrix}
$$

Matris çarpma işlemi sonucunda oluşan yeni vektör $\mathbf{v'} = \begin{bmatrix} 3 \\ 4 \end{bmatrix}$, $\mathbf{v}$ vektörünün lineer dönüşümüdür. Yani yeniden ölçeklendirilmiş, yön ve büyüklük değişmiştir.

![matris vektör lineer dönüşüm](/img/matrix_vector_transform.svg)

*Turuncu vektör $\mathbf{v}$, mavi vektör $\mathbf{v'}$ vektörünü temsil etmektedir.*