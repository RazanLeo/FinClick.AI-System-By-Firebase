
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import { UploadCloud, Edit3, FileText, Trash2 } from 'lucide-react';
import { FinancialStatement } from '@/lib/types';

interface FileUploaderProps {
  onFilesUploaded: (files: File[]) => void;
  onManualInput: (data: FinancialStatement[]) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFilesUploaded, onManualInput }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [showManualInput, setShowManualInput] = useState(false);
  const [manualData, setManualData] = useState<FinancialStatement[]>([]);

  const onDrop = (acceptedFiles: File[]) => {
    setFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
    onFilesUploaded([...files, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const removeFile = (fileToRemove: File) => {
    const newFiles = files.filter(file => file !== fileToRemove);
    setFiles(newFiles);
    onFilesUploaded(newFiles);
  };

  const handleManualSubmit = () => {
    onManualInput(manualData);
    setShowManualInput(false);
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* File Upload Area */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`p-8 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors duration-300 ${
            isDragActive ? 'border-finclick-gold bg-finclick-gold/20' : 'border-finclick-gold/40'
          }`}
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <UploadCloud className="mx-auto h-12 w-12 text-finclick-gold/80 mb-4" />
          <p className="text-lg font-semibold">
            اسحب وأفلت الملفات هنا، أو انقر للتصفح
          </p>
          <p className="text-sm text-finclick-gold/60 mt-2">
            (ملفات PDF, Excel, CSV)
          </p>
        </motion.div>

        {/* Manual Input Trigger */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={() => setShowManualInput(true)}
          className="p-8 border-2 border-dashed border-finclick-gold/40 rounded-lg text-center cursor-pointer transition-colors duration-300 hover:border-finclick-gold hover:bg-finclick-gold/20 flex flex-col justify-center items-center"
        >
          <Edit3 className="mx-auto h-12 w-12 text-finclick-gold/80 mb-4" />
          <p className="text-lg font-semibold">أو قم بالإدخال اليدوي</p>
          <p className="text-sm text-finclick-gold/60 mt-2">أدخل البيانات المالية مباشرة</p>
        </motion.div>
      </div>

      {/* Uploaded Files Preview */}
      {files.length > 0 && (
        <div className="mt-8">
          <h3 className="font-bold mb-4">الملفات المرفوعة:</h3>
          <div className="space-y-3">
            {files.map((file, index) => (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                key={index}
                className="flex items-center justify-between bg-finclick-gold/10 p-3 rounded-md"
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5" />
                  <span>{file.name}</span>
                </div>
                <button onClick={() => removeFile(file)} className="text-red-500 hover:text-red-400">
                  <Trash2 className="h-5 w-5" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Manual Input Modal (Simplified) */}
      {showManualInput && (
         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
           <div className="card p-8 rounded-lg max-w-lg w-full">
             <h2 className="text-2xl font-bold mb-4">الإدخال اليدوي للبيانات</h2>
             {/* This would be a more complex form in a real app */}
             <p className="text-center my-8">هنا سيتم وضع نموذج إدخال البيانات المالية بشكل تفصيلي.</p>
             <div className="flex justify-end gap-4">
              <button onClick={() => setShowManualInput(false)} className="btn">إلغاء</button>
              <button onClick={handleManualSubmit} className="btn-primary">حفظ البيانات</button>
            </div>
           </div>
         </div>
      )}
    </div>
  );
};

export default FileUploader;
