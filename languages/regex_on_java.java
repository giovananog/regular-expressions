import java.util.regex.*;

public class regex_on_java {
    public static void main(String[] args) {
        String text = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
        Pattern patternLetters = Pattern.compile("[a-f]");
        Matcher matcher = patternLetters.matcher(text);

        while (matcher.find()) {
            System.out.printf("positions: %s, %s\tvalue: %s%n",
                matcher.start(), matcher.end(), matcher.group());       // (1)
        }

        System.out.println(text.replaceAll("[7-9]", "found"));     //(2)
    }
}


/////// outputs

// (1) - returns the initial, final position and the value matched on the text, given the regex      
                            //     positions: 20, 21	value: a
                            //     positions: 22, 23	value: b
                            //     positions: 24, 25	value: c
                            //     positions: 26, 27	value: d
                            //     positions: 28, 29	value: e
                            //     positions: 30, 31	value: f


// (2) - replace the matched parts of the text, given the regex, by the string parameter
                            // 0,1,2,3,4,5,6,found,found,found,a,b,c,d,e,f