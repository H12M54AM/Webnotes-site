const temp = document.getElementById('root');

/**
 * Contains data from the targeted users for the product
 * requires: title, desciption
 */
class Occupation {
    constructor(self, title:string, description:string) {
        self.title = title;
        self.description = description;
    }

    addwith(t:string, d:string):string {
        return 'The Title is ${t}.\nThe Description is ${d}';
    }

    add():string {
        return "Title: ${title}\nDescription ${description}"
    }
}

/**
 * For a different section on the home page
 */
class Testimonials extends Occupation{
    constructor(self, quote:string, author:string) {
        super(self, self.title, self.desciption);
        self.quote = quote;
        self.author = author;
    }
}