#ifndef COMMON_FUNCTION_H
#define COMMON_FUNCTION_H
char **split_char(char *str, char delimiter);
int count_occurrence(char *str, char delimiter);
char **split_string(char *str, const char *delimiter);
char* read_file_to_string(const char* filename);
#endif