var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
  title: {type: String, required: '{PATH} is required!'},
  featured: {type: Boolean, required: '{PATH} is required!'},
  published: {type: Date, required: '{PATH} is required!'},
  tags: [String]
});

var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses () {
  Course.find({}).remove(function () {
    Course.create({title: 'Course 1',  featured: true,  published: new Date('02/20/2014'), tags: ['C++', 'Javascript']});
    Course.create({title: 'Course 2',  featured: true,  published: new Date('01/20/2014'), tags: ['C++', 'Javascript']});
    Course.create({title: 'Course 3',  featured: true,  published: new Date('12/20/2013'), tags: ['C++', 'Javascript']});
    Course.create({title: 'Course 4',  featured: false, published: new Date('11/20/2013'), tags: ['C#', 'Javascript']});
    Course.create({title: 'Course 5',  featured: true,  published: new Date('10/20/2013'), tags: ['C#', 'Javascript']});
    Course.create({title: 'Course 6',  featured: false, published: new Date('09/20/2013'), tags: ['C#', 'Javascript']});
    Course.create({title: 'Course 7',  featured: true,  published: new Date('08/20/2013'), tags: ['C#', 'C++',]});
    Course.create({title: 'Course 8',  featured: false, published: new Date('07/20/2013'), tags: ['C#', 'C++',]});
    Course.create({title: 'Course 9',  featured: true,  published: new Date('02/20/2014'), tags: ['C#', 'C++',]});
    Course.create({title: 'Course 10', featured: true,  published: new Date('02/20/2014'), tags: ['C#', ]});
    Course.create({title: 'Course 11', featured: true,  published: new Date('02/20/2014'), tags: ['C#', ]});
    Course.create({title: 'Course 12', featured: true,  published: new Date('01/20/2014'), tags: ['C#', ]});
    Course.create({title: 'Course 13', featured: true,  published: new Date('12/20/2013'), tags: ['C++']});
    Course.create({title: 'Course 14', featured: false, published: new Date('11/20/2013'), tags: ['C++']});
    Course.create({title: 'Course 15', featured: true,  published: new Date('10/20/2013'), tags: ['C++']});
    Course.create({title: 'Course 16', featured: false, published: new Date('09/20/2013'), tags: ['Javascript']});
    Course.create({title: 'Course 17', featured: true,  published: new Date('08/20/2013'), tags: ['Javascript']});
    Course.create({title: 'Course 18', featured: false, published: new Date('07/20/2013'), tags: ['Javascript']});
  });
}

exports.createDefaultCourses = createDefaultCourses;