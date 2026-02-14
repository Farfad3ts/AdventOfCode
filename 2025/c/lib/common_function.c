#include "common_function.h"
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char **split_char(char *str, char delimiter) {
    if (!str) {
        return NULL;
    }
    int count = count_occurrence(str, delimiter);
    char **result = malloc((count + 2) * sizeof(char*));
    if (!result) {
        return NULL;
    }
    char delims[2] = { delimiter, '\0' };
    int index = 0;
    char *token = strtok(str, delims);
    while (token) {
        result[index++] = token;
        token = strtok(NULL, delims);
    }
    result[index] = NULL;
    return result;
}

int count_occurrence(char *str, char delimiter){
    int count = 0;
    for (int i = 0; str[i] != '\0'; i++) {
        if (str[i] == delimiter) {
            count++;
        }
    }
    return count;
}

char **split_string(char *str, const char *delimiter){
    int count = 0;
    char *temp = strdup(str);
    char *token = strtok(temp, delimiter);
    while (token != NULL) {
        count++;
        token = strtok(NULL, delimiter);
    }
    free(temp);
    char **result = malloc((count + 1) * sizeof(char*));
    int index = 0;
    token = strtok(str, delimiter);
    while (token != NULL) {
        result[index++] = token;
        token = strtok(NULL, delimiter);
    }
    result[index] = NULL;
    return result;
}

char* read_file_to_string(const char* filename) {
    FILE* file = fopen(filename, "rb");
    if (!file) {
        perror("Error opening file");
        return NULL;
    }
    fseek(file, 0, SEEK_END);
    long size = ftell(file);
    fseek(file, 0, SEEK_SET);
    if (size == -1) {
        perror("Error getting file size");
        fclose(file);
        return NULL;
    }
    char* buffer = (char*)malloc(size + 1);
    if (!buffer) {
        perror("Error allocating memory");
        fclose(file);
        return NULL;
    }
    size_t bytes_read = fread(buffer, 1, size, file);
    fclose(file);
    if (bytes_read != size) {
        perror("Error reading file content");
        free(buffer);
        return NULL;
    }
    buffer[size] = '\0';
    return buffer;
}