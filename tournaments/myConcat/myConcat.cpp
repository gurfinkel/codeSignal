std::string myConcat(std::vector<std::string> strings, std::string separator) {

   std::string result = "";
   for (int i = 0; i < strings.size(); i++) {
      result += strings[i] + separator;
   }
   return result;
}
