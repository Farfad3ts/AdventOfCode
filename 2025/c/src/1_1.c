#include "common_function.h"
#include <stdio.h>
#include <stdlib.h>

int main() {
    char *path = "../input/1.txt";
    char *file_content = read_file_to_string(path);
    char **split_result = split_char(file_content, '\n');
    int counter = 50;
    int result = 0;
    for (int i = 0; split_result[i] != NULL; i++) {
        if (split_result[i][0] == '\0') {
            continue;
        }
        char direction = split_result[i][0];
        long force = strtol(split_result[i] + 1, NULL, 10);
        force %= 100;
        if (direction == 'L') {
            counter -= (int)force;
        }
        else if (direction == 'R') {
            counter += (int)force;
        }
        else {
            continue;
        }
        counter %= 100;
        if (counter < 0){
            counter += 100;
        }
        if (counter == 0){
            result++;
        }
    }
    printf("%d\n", result);
    return 0;
}