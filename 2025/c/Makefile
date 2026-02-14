CC = gcc
CFLAGS = -Wall -Wextra -O0 -g -Ilib

SRC_DIR = src
LIB_DIR = lib
OUT_DIR = out

SRC = $(wildcard $(SRC_DIR)/*.c)
LIB_SRC = $(LIB_DIR)/common_function.c

EXE = $(patsubst $(SRC_DIR)/%.c,$(OUT_DIR)/%.exe,$(SRC))

all: $(EXE)

$(OUT_DIR)/%.exe: $(SRC_DIR)/%.c $(LIB_SRC)
	$(CC) $(CFLAGS) $< $(LIB_SRC) -o $@

clean:
	del /Q $(OUT_DIR)\*.exe