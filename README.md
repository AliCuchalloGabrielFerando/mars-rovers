# mars-rovers

## rover navigation on mars

A squad of robotic rovers are to be landed by NASA on a plateau on Mars. This plateau,
which is curiously rectangular, must be navigated by the rovers so that their on-board
cameras can get a complete view of the surrounding terrain to send back to Earth.

A rover's position and location are represented by a combination of x and y coordinates
and a letter representing one of the four cardinal compass points. The plateau is divided
up into a grid to simplify navigation. An example position might be 0, 0, N, which
means the rover is in the bottom left corner and facing North.

To control a rover, NASA sends a simple string of letters. The possible letters are 'L', 'R'
and 'M'. 'L' and 'R' makes the rover spin 90 degrees left or right respectively, without
moving from its current spot. 'M' means move forward one grid point and maintain the
same heading.

Assume that the square directly North from (x, y) is (x, y+1).

### INPUT:

The first line of input is the upper-right coordinates of the plateau, the lower-left
coordinates are assumed to be 0,0.
The rest of the input is information pertaining to the rovers that have been deployed.
Each rover has two lines of input. The first line gives the rover's position, and the
second line is a series of instructions telling the rover how to explore the plateau.
The position is made up of two integers and a letter separated by spaces,
corresponding to the x and y coordinates and the rover's orientation.

Each rover will be finished sequentially, which means that the second rover won't start
to move until the first one has finished moving.

#### format:

```
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
```

It has two rovers

#### I need more rovers, 1..n:

It is expected that the format will be met, more rovers can be added but respecting the structure.

```
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
```

It has four rovers

### OUTPUT:

```
OUTPUT:
Rover 1, x:1, y:3, N
Rover 2, x:5, y:1, E
```

```
OUTPUT:
Rover 1, x:1, y:3, N
Rover 2, x:5, y:1, E
Rover 3, x:1, y:3, N
Rover 4, x:5, y:1, E
```

### LIMITS:

If the limit is exceeded by an instruction from M, the rover will abort the instruction and go to the next one, it will be shown that the instruction was not carried out through the console.

```
the rover 1 cannot execute the operation:
                        (1, 6,N)
```

when the limits is (5,5)

## Installation

```sh
$ npm install
```

### Server

You can use the next commands.

- Start

```sh
npm run start
```

- Dev

```sh
npm run dev
```

- Test

```sh
npm run test
```

### endpoint

You can send data by.
POST

```sh
http://localhost:3000/capturar-datos
```

the type content is a text/plain
set body from INPUT - format

### test

The text must be pasted without spaces, only line breaks.

```
testing/rovers.test.js
```

```js
line 7
const body =
`5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`
```
