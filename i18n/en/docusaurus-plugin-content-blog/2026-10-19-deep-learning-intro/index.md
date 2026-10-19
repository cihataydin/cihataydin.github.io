---
slug: deep-learning-intro
title: Introduction to Deep Learning
tags: [deep-learning]
---

In this post, we will take a look at the fundamentals of deep learning.

### Perceptron - Forward Propagation

![The Perceptron Forward Propagation](/img/the-perceptron-forward-propagation.svg)

$$
\hat{y} = g\left(w_0 + \sum_{i=1}^{m} x_i w_i\right)
$$
Here, $\hat{y}$ is called the `output`, $g$ the `activation function`, $x_i$'s the `inputs`, $w_i$'s the `weights`, and $w_0$ the `bias`. A linear combination of weights and inputs is passed through a non-linear function to produce an output. This structure is called a **perceptron** that performs **forward propagation**. If inputs and weights are written in vector/matrix form, the following equation is obtained:

$$
\hat{y} = g(w_0 + \mathbf{x}^T \mathbf{w})
$$
where $\mathbf{x}$ and $\mathbf{w}$ are defined as:
$$
\mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_m \end{bmatrix}, \quad \mathbf{w} = \begin{bmatrix} w_1 \\ w_2 \\ \vdots \\ w_m \end{bmatrix}
$$

### Activation Functions

Real-world problems are too complex to be solved using only linear operations. Therefore, **activation functions** are used in neural networks to introduce and teach non-linear relationships.

#### Sigmoid

Takes values in the range of $0$ and $1$.

$$
g(z)=\sigma(z) = \frac{1}{1 + e^{-z}}
$$

Its derivative:

$$
g^{'}(z)=g(z)(1-g(z))
$$

Usage in `TensorFlow` and `PyTorch`:

```python
tf.math.sigmoid(z)
torch.sigmoid(z)
```

#### Hyperbolic Tangent

Takes values in the range of $-1$ and $1$.

$$
g(z)=\tanh(z) = \frac{e^z - e^{-z}}{e^z + e^{-z}}
$$

Its derivative:

$$
g^{'}(z)=1-g^{2}(z)
$$

Usage in `TensorFlow` and `PyTorch`:

```python
tf.math.tanh(z)
torch.tanh(z)
```

#### Rectified Linear Unit (ReLU)

Takes values greater than `0`.

$$
g(z)=\max(0,z)
$$

Its derivative:

$$
g^{'}(z) = \begin{cases} 
    1, & z > 0 \\ 
    0, & \text{otherwise}
\end{cases}
$$

Usage in `TensorFlow` and `PyTorch`:

```python
tf.nn.relu(z)
torch.nn.ReLU(z)
```

### Building Neural Networks

#### Perceptron - Multi-Output

By using multiple perceptrons, a layer with multiple outputs can be built.

![Multi Output Perceptron](/img/multi-output-perceptron.svg)

$z_i$ is defined below $(i=1,2)$:

$$
z_i = w_{0,i} + \sum_{j=1}^{m} x_j w_{j,i}
$$

Usage in `TensorFlow`:

```python
import tensorflow as tf

layer = tf.keras.layers.Dense(units=2)
```

Usage in `PyTorch`:

```python
import torch.nn as nn

layer = nn.Linear(in_features=m, out_features=2)
```

#### Dense Layer

Layers where every input is connected to every output are called **dense layers** (or fully connected layers). Below is an example of a custom dense layer implementation.

Usage in `TensorFlow`:

```python
class MyDenseLayer(tf.keras.layers.Layer):
    def __init__(self, input_dim, output_dim):
        super(MyDenseLayer, self).__init__()
        
        # Initialize weights and bias
        self.W = self.add_weight([input_dim, output_dim])
        self.b = self.add_weight([1, output_dim])
    
    def call(self, inputs):
        # Forward propagate the inputs
        z = tf.matmul(inputs, self.W) + self.b
        
        # Feed through a non-linear activation
        output = tf.math.sigmoid(z)
        return output
```

Usage in `PyTorch`:

```python
class MyDenseLayer(nn.Module):
    def __init__(self, input_dim, output_dim):
        super(MyDenseLayer, self).__init__()
        
        # Initialize weights and bias
        self.W = nn.Parameter(torch.randn(input_dim, output_dim, requires_grad=True))
        self.b = nn.Parameter(torch.randn(input_dim, output_dim, requires_grad=True))
        
    def forward(self, inputs):  
        # Forward propagate the inputs
        z = torch.matmul(inputs, self.W) + self.b
        
        # Feed through a non-linear activation
        output = torch.sigmoid(z)
        return output
```

#### Single-Layer Neural Network

So far, we only had an input layer and an output layer. Now, let's add a hidden layer. The components of this layer also act as perceptrons.

![Single Layer Neural Network](/img/single-layer-neural-network.svg)

Hidden layer outputs:

$$
z_i = w_{0,i}^{1} + \sum_{j=1}^{m} x_j w_{j,i}^{1}
$$

Final outputs:

$$
\hat{y}_i = g\left(w_{0,i}^{2} + \sum_{j=1}^{n} g(z_j) w_{j,i}^{2}\right)
$$

Usage in `TensorFlow`:

```python
import tensorflow as tf

model = tf.keras.Sequential([
    tf.keras.layers.Dense(n),
    tf.keras.layers.Dense(2)
])
```

Usage in `PyTorch`:

```python
from torch import nn

model = nn.Sequential(
    nn.Linear(m, n),
    nn.ReLU(),
    nn.Linear(n, 2)
)
```

#### Deep Neural Network

Now we are at the core of the topic! We can increase the number of hidden layers as much as we want. Each layer processes the output received from the previous layer and deepens the representation by computing new input-output transformations through perceptrons.

![Deep Neural Network](/img/deep-neural-network.svg)

Hidden layer outputs:

$$
z_{k,i} = w_{0,i}^{k} + \sum_{j=1}^{n_{k-1}} g(z_{k-1, j}) w_{j,i}^{k}
$$

Usage in `TensorFlow`:

```python
import tensorflow as tf

model = tf.keras.Sequential([
    tf.keras.layers.Dense(n1),
    tf.keras.layers.Dense(n2),
    #...
    tf.keras.layers.Dense(2)
])
```

Usage in `PyTorch`:

```python
from torch import nn

model = nn.Sequential(
    nn.Linear(m, n1),
    nn.ReLU(),
    #...
    nn.ReLU(),
    nn.Linear(nk, 2)
)
```

### Empirical Loss

The difference between the predicted value and the actual target value is called **loss**.

$$
\mathcal{L}(f(x^{(i)};W), y^{(i)})
$$

The first component is the predicted value, and the second is the ground truth. $\mathcal{L}$ is the loss function that measures the discrepancy between these two values.

#### Empirical Loss / Cost Function

$J$ is referred to as the **cost function**. It is used to measure how accurate or inaccurate the neural network's predictions are across a dataset.

$$
J(\mathbf{W}) = \frac{1}{n} \sum_{i=1}^{n} \mathcal{L}\left( f(x^{(i)}; \mathbf{W}), y^{(i)} \right)
$$

#### Binary Cross-Entropy Loss

If the outputs are restricted to binary values `{0,1}` (i.e., for binary classification problems), the following cost function is used. For example, predicting whether a customer will buy a product or not.

$$
J(\mathbf{W}) = -\frac{1}{n} \sum_{i=1}^{n} \left[ y^{(i)} \log(f(x^{(i)}; \mathbf{W})) + (1 - y^{(i)}) \log(1 - f(x^{(i)}; \mathbf{W})) \right]
$$

Usage in `TensorFlow`:

```python
loss = tf.reduce_mean(tf.nn.softmax_cross_entropy_with_logits(y, predicted))
```

Usage in `PyTorch`:

```python
loss = torch.nn.functional.cross_entropy(predicted, y)
```

#### Mean Squared Error (MSE)

To compute the cost in a neural network whose outputs are real numbers (regression problems), the following function is used:

$$
J(\mathbf{W}) = \frac{1}{n} \sum_{i=1}^{n} \left( y^{(i)} - f(x^{(i)}; \mathbf{W}) \right)^2
$$

Usage in `TensorFlow`:

```python
loss = tf.reduce_mean(tf.square(tf.subtract(y, predicted)))
loss = tf.keras.losses.MSE(y, predicted)
```

Usage in `PyTorch`:

```python
loss = torch.nn.functional.mse_loss(predicted, y)
```

### Training Neural Networks

The primary goal is to reduce the loss to the lowest possible level. To achieve this, we continuously update the parameters in the neural network—that is, the **weights**. Our goal is to find the optimal weight values that minimize the loss function.

$$
\boldsymbol{W}^* = \arg\min_{\boldsymbol{W}} \frac{1}{n} \sum_{i=1}^{n} \mathcal{L}\left(f(x^{(i)}; \boldsymbol{W}), y^{(i)}\right)
$$

$$
\boldsymbol{W}^* = \arg\min_{\boldsymbol{W}} J(\boldsymbol{W})
$$

Here, $\boldsymbol{W} = \{\boldsymbol{W}^0, \boldsymbol{W}^1, ...\}$ represents the weight matrices.

### Gradient Descent

Updating the weights is performed using the gradient descent algorithm.

Algorithm:
- Initialize weights randomly ~ $\mathcal{N}(0, \sigma^2)$ 
- Loop until convergence:
  - Compute the `gradient`, $\frac{\partial J(\boldsymbol{W})}{\partial \boldsymbol{W}}$ 
  - Update weights, $\boldsymbol{W} \leftarrow \boldsymbol{W} - \eta \frac{\partial J(\mathbf{W})}{\partial \mathbf{W}}$
- Return optimal weights.

Here, $\eta$ represents the learning rate.

Usage in `TensorFlow`:

```python
import tensorflow as tf

weights = tf.Variable([tf.random.normal()])

while True: # loop forever
    with tf.GradientTape() as g:
        loss = compute_loss(weights)
        gradient = g.gradient(loss, weights)
    
    weights = weights - lr * gradient
```

Usage in `PyTorch`:

```python
import torch

weights = torch.randn(1, requires_grad=True)

while True:
    loss = compute_loss(weights)

    loss.backward()

    with torch.no_grad():
        weights -= lr * weights.grad
        weights.grad.zero_()
```

### Computing Gradients - Backpropagation

Let's examine the impact of a small change in weights on $J(\boldsymbol{W})$.

![Gradient Backpropagation](/img/gradient-backpropagation.svg)

$$
\frac{\partial J(\mathbf{W})}{\partial w_2} = \frac{\partial J(\mathbf{W})}{\partial \hat{y}} * \frac{\partial \hat{y}}{\partial w_2}
$$

Here, we defined the effect of the weight $w_2$ on $J(\mathbf{W})$ using the chain rule.

$$
\frac{\partial J(\mathbf{W})}{\partial w_1} = \frac{\partial J(\mathbf{W})}{\partial \hat{y}} * \frac{\partial \hat{y}}{\partial w_1}
$$

Since the function $\hat{y}$ indirectly depends on the weight $w_1$ through $z_1$, applying the chain rule again yields:

$$
\frac{\partial J(\mathbf{W})}{\partial w_1} = \frac{\partial J(\mathbf{W})}{\partial \hat{y}} * \frac{\partial \hat{y}}{\partial z_1} * \frac{\partial z_1}{\partial w_1}
$$

This determines the impact of $w_1$ on the cost function $J(\mathbf{W})$. To minimize the cost function, we can compute the partial derivatives with respect to all weights and update them accordingly.

### Cost Function Optimization

In the weight update step:

$$
\boldsymbol{W} \leftarrow \boldsymbol{W} - \eta \frac{\partial J(\mathbf{W})}{\partial \mathbf{W}}
$$

If $\eta$ takes a value smaller than necessary, the cost function converges slowly and might get stuck in a local minimum. If it takes a value larger than necessary, the cost function diverges. With an optimal value, it converges smoothly. For these reasons, the learning rate should be designed as a dynamic and adaptive parameter. Consequently, $\eta$ should be computed based on parameters such as gradient magnitude, learning speed, and weight scale.

### Gradient Descent Algorithms

```python
tf.keras.optimizers.SGD
tf.keras.optimizers.Adam
tf.keras.optimizers.Adadelta
tf.keras.optimizers.Adagrad
tf.keras.optimizers.RMSprop

torch.optim.SGD
torch.optim.Adam
torch.optim.Adadelta
torch.optim.Adagrad
torch.optim.RMSprop
```

### Putting It Together

```python
import tensorflow as tf

model = tf.keras.Sequential([...])

# pick your favorite optimizer
optimizer = tf.keras.optimizers.SGD()

while True: # loop forever
    # forward pass through the network
    prediction = model(x)
    
    with tf.GradientTape() as tape:
        # compute the loss
        loss = compute_loss(y, prediction)
        
    # update the weights using the gradients
    grads = tape.gradient(loss, model.trainable_variables)
    optimizer.apply_gradients(zip(grads, model.trainable_variables))
```

### Mini-Batch

In large datasets, computing the derivative $\frac{\partial J(\mathbf{W})}{\partial \mathbf{W}}$ over the entire dataset is computationally expensive and sometimes impossible. To overcome this, the dataset is split into **small mini-batches**. The derivative of the cost function is computed for these mini-batches instead of the full dataset at each iteration, and model weights are updated accordingly.

$$
\frac{\partial J(\mathbf{W})}{\partial \mathbf{W}} = \frac{1}{B} \sum_{k=1}^{B} \frac{\partial J_k(\mathbf{I})}{\partial \mathbf{W}}
$$

During network training, mini-batch gradient descent ensures smooth convergence and allows the use of larger learning rates. Additionally, parallel computation on mini-batches significantly accelerates training.

### Overfitting

Striking the right balance in machine learning is critical. If **overfitting** occurs, the model fails to generalize, becomes overly complex, and memorizes noise by using more parameters than necessary. Conversely, if **underfitting** occurs, the model lacks the capacity to capture patterns in the data and misses even fundamental relationships.

![Overfitting](/img/overfitting.svg)

### Regularization

Regularization is a set of techniques applied to prevent the model from overfitting to the training data and to improve its generalization ability. Below are common regularization methods:

### Dropout

During training, certain activations are randomly set to zero. This forces the network not to rely heavily on any single perceptron. For instance, half of the perceptrons in a layer can be dropped out during training.

```python
# TensorFlow
tf.keras.layers.Dropout(p=0.5)

# PyTorch
torch.nn.Dropout(p=0.5)
```

### Early Stopping

To prevent the model from memorizing training data and overfitting, training is stopped early before the loss drops to zero or begins rising on validation data.

![Early Stopping](/img/early-stopping.svg)

See you in the next blog posts!

### References

[MIT Intro to Deep Learning](https://introtodeeplearning.com/)