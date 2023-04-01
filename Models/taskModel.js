import mongoose from 'mongoose';



const taskSchema = new mongoose.Schema(

  {

    title: { type: String, required: true },

    description: { type: String, required: true },

    // dueDate : { type: Date, required: true },

    dueDate : { type: String, required: true },

    priority : { type: String, required: true  },

    status : { type: String, required: true  },
        
    user: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
    },

  },


  {
    timestamps: true,
  }

);

const Task = mongoose.model('Task', taskSchema);

export default Task;