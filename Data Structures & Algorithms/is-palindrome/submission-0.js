class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // Helper function to check if a character is alphanumeric
        function isAlphanumeric(c) {
            return /[a-zA-Z0-9]/.test(c);
        }

        // Convert the string to lowercase
        s = s.toLowerCase();

        // Initialize two pointers
        let left = 0;
        let right = s.length - 1;

        // Move the two pointers towards each other
        while (left < right) {
            // Skip non-alphanumeric characters
            while (left < right && !isAlphanumeric(s[left])) {
                left++;
            }
            while (left < right && !isAlphanumeric(s[right])) {
                right--;
            }

            // Compare the characters at left and right pointers
            if (s[left] !== s[right]) {
                return false;
            }

            // Move the pointers inward
            left++;
            right--;
        }

        // If we haven't returned false, the string is a palindrome
        return true;
    }
}
