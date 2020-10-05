/**
* Typical pin layout used:
* ------------------------------------------------------------
*             MFRC522      Arduino       Arduino   Arduino
*             Reader/PCD   Uno           Mega        Nano v3
* Signal      Pin                  Pin           Pin                Pin
* ------------------------------------------------------------
* RST/Reset   RST            9                         5                 D9
* SPI SS          SDA(SS)      10                      53              D10
* SPI MOSI    MOSI         11 / ICSP-4       51              D11
* SPI MISO    MISO         12 / ICSP-1       50              D12
* SPI SCK       SCK            13 / ICSP-3       52              D13
*/


#include <SPI.h>
#include <MFRC522.h>
#define RST_PIN            9         
#define SS_PIN            10       
MFRC522 mfrc522(SS_PIN, RST_PIN);  
MFRC522::MIFARE_Key key;
#define  buzzer 8
#define  led 7
void setup() {
    Serial.begin(9600);    
    SPI.begin();        
    mfrc522.PCD_Init(); 
    pinMode(buzzer,OUTPUT);
    pinMode(led,OUTPUT); 
    digitalWrite(led,HIGH);
}

void loop() {
   
    if ( ! mfrc522.PICC_IsNewCardPresent())
        {
        return;
        }
    if ( ! mfrc522.PICC_ReadCardSerial())
       {    
        return;
       }
    dump_byte_array(mfrc522.uid.uidByte, mfrc522.uid.size);
    mfrc522.PICC_HaltA();
    mfrc522.PCD_StopCrypto1();
}
void dump_byte_array(byte *buffer, byte bufferSize) {
    for (byte i = 0; i < bufferSize; i++) {
        Serial.print(buffer[i] < 0x10 ? "0" : "");
        Serial.print(buffer[i], HEX);
    }
    Serial.println();
    digitalWrite(buzzer,HIGH);
    digitalWrite(led,LOW);
    delay(200);
    digitalWrite(buzzer,LOW);
    digitalWrite(led,HIGH); 
}
