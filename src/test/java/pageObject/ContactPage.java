package pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import static sharedResources.supportMethods.CustomMethods.*;
import static sharedResources.supportMethods.DriverMethods.driver;

public class ContactPage {

    public static String contactPage_css = ".current_page_item [href*='/contact']";

    public static String contactPageNameField_css = "input.name";
    public static String contactPageEmailField_css = "input.email";
    public static String contactPageCommentField_css = "[id*='contact-form-comment']";
    public static String contactPageSubmitBtn_css = ".contact-submit [type='submit']";

    public static String contactPageFormSubmitted_css = ".contact-form-submission";


    public static WebElement contactPageContent() { return driver.findElement(By.cssSelector(contactPage_css));}

    public static WebElement contactPageClickSubmitBtn() {
        jsScrollElementIntoView(contactPageSubmitBtn_css);
        return findAndClickElement(contactPageSubmitBtn_css);
    }

    public static void contactPageEnterNameIntoField() {
        clearAndInputText(contactPageNameField_css, "autotest");
    }
    public static void contactPageEnterEmailIntoField() {
        clearAndInputText(contactPageEmailField_css, "autotest9032842938722@test.com");
    }
    public static void contactPageEnterCommentsIntoField() {
        clearAndInputText(contactPageCommentField_css, "This is a comment to be added for testing.");
    }

    public static WebElement contactPageFormSubmittedContent() {
        elementShouldNotBePresent(contactPageNameField_css);
        elementShouldNotBePresent(contactPageEmailField_css);
        elementShouldNotBePresent(contactPageCommentField_css);
        return driver.findElement(By.cssSelector(contactPageFormSubmitted_css)); }

    public static void contactPageFormSubmittedContentNotPresent() {
        verifyElementOnPage(contactPageNameField_css);
        verifyElementOnPage(contactPageEmailField_css);
        verifyElementOnPage(contactPageCommentField_css);
        elementShouldNotBePresent(contactPageFormSubmitted_css);
        }

}
