/**The Longest common subsequence(LCS) is defined as the longest
 * subsequence that is common to all the given sequences, provided
 * that the elements of the subsequence are not required to occupy
 * consecutive positions within the original sequences.
 */
/**We are tasked to find longest common subsequence of two strings */
var LCS = (function () { 
    function LCS() {
    } /**This function is to find the length of the longest common subsequences of
    * `X[0…m-1]` and `Y[0…n-1]` where variable m which represents for x axis(column)
    * and n which represents for y axis(row).
    */
    LCS.lcs = function (String1, String2, m, n) {
        /*In this part it will return if the end of either sequence is reached */ 
        var lcsTable = (function (dims) { var allocate = function (dims) { if (dims.length === 0) {
            return 0;
        }
        else {
            var array = [];
            for (var i1 = 0; i1 < dims[0]; i1++) {
                array.push(allocate(dims.slice(1)));
            }
            return array;
        } }; 
        return allocate(dims); })([m + 1, n + 1]);
        for (var i2 = 0; i2 <= m; i2++) {
            {
                for (var j = 0; j <= n; j++) {
                    {
                        if (i2 === 0 || j === 0)
                            lcsTable[i2][j] = 0;
                        else if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(String1.charAt(i2 - 1)) == (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(String2.charAt(j - 1)))
                            lcsTable[i2][j] = lcsTable[i2 - 1][j - 1] + 1;
                        else
                            lcsTable[i2][j] = Math.max(lcsTable[i2 - 1][j], lcsTable[i2][j - 1]);
                    }
                    ;
                }
            }
            ;
        };
        /**In this part we are creating an array to store our LCS string*/
        var index = lcsTable[m][n];
        var temp = index;
        var lcs = (function (s) { var a = []; while (s-- > 0)
            a.push(null); return a; })(index + 1);

        //This is set to be a terminating character
        lcs[index] = '\u0000';

        /** Start from the right-most-bottom-most corner and
         * one by one store characters in lcs[]
         */
        var i = m;
        var j = n;
        while ((i > 0 && j > 0)) {
            {   
                /**If current character in X[] and Y are same, then
                 * current character is part of LCS
                 */
                if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(String1.charAt(i - 1)) == (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(String2.charAt(j - 1))) {
                    //this is where the process of putting the current character in result
                    lcs[index - 1] = String1.charAt(i - 1);
                    //reduce values of i, j and index
                    i--;
                    j--;
                    index--;
                }
                /**If value is not same, we will going to find the larger of two and go
                 * in the direction of the larger value
                 */
                else if (lcsTable[i - 1][j] > lcsTable[i][j - 1])
                    i--;
                else
                    j--;
            }
        }
        ;
        //This part I just printed out the input values of given
        console.log("String1 : " + String1 + "\nString2 : " + String2 + "\nLCS: ");
        for (var k = 0; k <= temp; k++) {
        //This part is for logging the Answer for our Longest Common Sequence
            console.log(lcs[k]); 
        }
    };
    LCS.main = function (args) {
        /**String Inputs to test if the code is running properly */
        var String1 = "ajblqcpdz";
        var String2 = "aefcnbtdi";
        var m = String1.length;
        var n = String2.length;
        LCS.lcs(String1, String2, m, n);
    };
    return LCS;
}());
LCS["__class"] = "LCS";
LCS.main(null);
