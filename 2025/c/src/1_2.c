#include "common_function.h"
#include <stdio.h>
#include <stdlib.h>

static int hits_to_zero(int p, char dir, long d) {
    int first;
    if (dir == 'R') {
        first = (100 - (p % 100)) % 100;
        if (first == 0) {
            first = 100;
        }
    } else {
        first = p % 100;
        if (first == 0){
            first = 100;
        }
    }
    if (d < first){
        return 0;
    }
    return 1 + (int)((d - first) / 100);
}

int main() {
    char *path = "../input/1.txt";
    char *file_content = read_file_to_string(path);
    char **split_result = split_char(file_content, '\n');
    int counter = 50;
    long long result = 0;
    for (int i = 0; split_result[i] != NULL; i++) {
        if (split_result[i][0] == '\0'){
            continue;
        }
        char dir = split_result[i][0];
        long d = strtol(split_result[i] + 1, NULL, 10);
        if (d < 0) {
            d = -d;
        }
        result += hits_to_zero(counter, dir, d);
        if (dir == 'R'){
            counter = (counter + (int)(d % 100)) % 100;
        }
        else if (dir == 'L') {
            counter = (counter - (int)(d % 100)) % 100;
            if (counter < 0){
                counter += 100;
            }
        }
    }
    printf("%lld\n", result);
    return 0;
}