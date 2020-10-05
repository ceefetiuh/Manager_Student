#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void setup() {

Serial.begin(9600);
}

void loop() {
//a="12345";
//Serial.println("@S123546&");
//delay (10000);
Serial.print("@S");
Serial.print("445566");
Serial.print("&");
}
