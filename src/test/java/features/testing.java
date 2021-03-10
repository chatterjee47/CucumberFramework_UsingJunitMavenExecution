package features;

import java.util.Calendar;
import java.util.TimeZone;

public class testing {

	public static void main(String[] args) {
		//Create a Calendar Object
        Calendar calendar = Calendar.getInstance(TimeZone.getDefault());
 
        //Get Current Day as a number
        int todayInt = calendar.get(Calendar.DAY_OF_MONTH);
       
        //Integer to String Conversion
        String todayStr = Integer.toString(todayInt);
        System.out.println("Today Str: " + todayStr + "\n");

	}

}
