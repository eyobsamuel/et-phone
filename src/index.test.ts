import etPhone from "./index";

describe('et-phone will validate', () => {
  test("ethiopian ethio-telecom mobile phone numbers", () => {
    expect(etPhone("+251 911 23 45 67",)).toMatchObject({
      isValid: true,
      phoneNumber: "+251911234567",
      provider: "Ethio telecom",
      phoneType: "Mobile",
    });
    expect(etPhone("251 911 23 45 67")).toMatchObject({
      isValid: true,
      phoneNumber: "+251911234567",
      provider: "Ethio telecom",
      phoneType: "Mobile",
    });
    expect(etPhone("0911 23 45 67")).toMatchObject({
      isValid: true,
      phoneNumber: "+251911234567",
      provider: "Ethio telecom",
      phoneType: "Mobile",
    });
    expect(etPhone("911 23 45 67")).toMatchObject({
      isValid: true,
      phoneNumber: "+251911234567",
      provider: "Ethio telecom",
      phoneType: "Mobile",
    });
    expect(etPhone("0911 23 45 678")).toMatchObject({
      isValid: false
    });
    expect(etPhone("911 23 45 678")).toMatchObject({
      isValid: false
    });
    expect(etPhone("+2510911 23 45 67")).toMatchObject({
      isValid: false
    });
  })

  test("ethiopian safaricom mobile phone numbers", () => {
    expect(etPhone("+251 711 23 45 67")).toMatchObject({
      isValid: true,
      phoneNumber: "+251711234567",
      provider: "Safaricom",
      phoneType: "Mobile",
    });
    expect(etPhone("251 711 23 45 67")).toMatchObject({
      isValid: true,
      phoneNumber: "+251711234567",
      provider: "Safaricom",
      phoneType: "Mobile",
    });
    expect(etPhone("711 23 45 67")).toMatchObject({
      isValid: true,
      phoneNumber: "+251711234567",
      provider: "Safaricom",
      phoneType: "Mobile",
    });
    expect(etPhone("0711 23 45 67")).toMatchObject({
      isValid: true,
      phoneNumber: "+251711234567",
      provider: "Safaricom",
      phoneType: "Mobile",
    });
    expect(etPhone("0711 23 45 678")).toMatchObject({ isValid: false });
    expect(etPhone("711 23 45 678")).toMatchObject({ isValid: false });
    expect(etPhone("+2510711 23 45 67")).toMatchObject({ isValid: false });
  })

  test("ethiopian ethio-telecom fixed-line phone numbers", () => {
    expect(etPhone("0111111234")).toMatchObject({
      isValid: true,
      phoneNumber: "+251111111234",
      provider: "Ethio telecom",
      phoneType: "Fixed-line",
    });
    expect(etPhone("0221111234")).toMatchObject({
      isValid: true,
      phoneNumber: "+251221111234",
      provider: "Ethio telecom",
      phoneType: "Fixed-line",
    })
    expect(etPhone("0331101234")).toMatchObject({
      isValid: true,
      phoneNumber: "+251331101234",
      provider: "Ethio telecom",
      phoneType: "Fixed-line",
    })
    expect(etPhone("0344401234")).toMatchObject({
      isValid: true,
      phoneNumber: "+251344401234",
      provider: "Ethio telecom",
      phoneType: "Fixed-line",
    })
    expect(etPhone("0251111234")).toMatchObject({
      isValid: true,
      phoneNumber: "+251251111234",
      provider: "Ethio telecom",
      phoneType: "Fixed-line",
    })
    expect(etPhone("0461101234")).toMatchObject({
      isValid: true,
      phoneNumber: "+251461101234",
      provider: "Ethio telecom",
      phoneType: "Fixed-line",
    })
    expect(etPhone("0471111234")).toMatchObject({
      isValid: true,
      phoneNumber: "+251471111234",
      provider: "Ethio telecom",
      phoneType: "Fixed-line",
    })
    expect(etPhone("0572271234")).toMatchObject({
      isValid: true,
      phoneNumber: "+251572271234",
      provider: "Ethio telecom",
      phoneType: "Fixed-line",
    })
    expect(etPhone("0581111234")).toMatchObject({
      isValid: true,
      phoneNumber: "+251581111234",
      provider: "Ethio telecom",
      phoneType: "Fixed-line",
    })
  })

  test("ethiopian ethio-telecom short code phone numbers", () => {
    expect(etPhone("123", ["shortCode"])).toMatchObject({
      isValid: true,
      phoneNumber: "123",
      provider: "Ethio telecom",
      phoneType: "Short Code",
    });
  })

  test("ethiopian ethio-telecom special phone numbers", () => {
    expect(etPhone("1234", ["special"])).toMatchObject({
      isValid: true,
      phoneNumber: "1234",
      provider: "Ethio telecom",
      phoneType: "Special",
    });
  })

  test("ethiopian phone number with specific provider", () => {
    expect(etPhone("0911234567", ["all"], ["ethioTelecom"])).toMatchObject({
      isValid: true,
      phoneNumber: "+251911234567",
      provider: "Ethio telecom",
      phoneType: "Mobile",
    });
  })
  test("ethiopian phone number with specific provider", () => {
    expect(etPhone("0711234567", ["all"], ["safaricom"])).toMatchObject({
      isValid: true,
      phoneNumber: "+251711234567",
      provider: "Safaricom",
      phoneType: "Mobile",
    });
  })
})