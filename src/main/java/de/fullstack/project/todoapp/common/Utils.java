package de.fullstack.project.todoapp.common;

import java.lang.reflect.Array;
import java.util.Collection;
import java.util.Map;

public class Utils {


    /**
     * Checks if passed parameter is empty
     *
     * @param value Object
     * @return true of false
     */
    public static boolean isEmpty(Object value) {
        if (value == null) {
            return true;
        } else if (value instanceof String) {
            return ((String) value).trim().length() == 0;
        } else if (value instanceof Collection) {
            return ((Collection<?>) value).isEmpty();
        } else if (value instanceof Map) {
            return ((Map<?, ?>) value).isEmpty();
        } else {
            return value.getClass().isArray() && (Array.getLength(value) == 0);
        }
    }


    public static boolean isNotEmpty(Object value) {
        return !isEmpty(value);
    }
}
