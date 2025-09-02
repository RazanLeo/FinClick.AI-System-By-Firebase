
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Company } from '@/lib/types';

const companySchema = z.object({
  name: z.string().min(2, "اسم الشركة مطلوب"),
  sector: z.string().min(2, "قطاع الشركة مطلوب"),
  activity: z.string().min(2, "نشاط الشركة مطلوب"),
  yearsToAnalyze: z.number().min(1, "يجب تحديد عدد السنوات").max(10, "الحد الأقصى 10 سنوات"),
  currency: z.string().min(2, "العملة مطلوبة"),
});

interface CompanyDetailsFormProps {
  onSubmit: (data: Company) => void;
}

const CompanyDetailsForm: React.FC<CompanyDetailsFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Company>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      yearsToAnalyze: 3,
      currency: 'SAR',
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Company Name */}
        <div>
          <label htmlFor="name" className="label">اسم الشركة</label>
          <input id="name" type="text" {...register('name')} className="input" />
          {errors.name && <p className="error-message">{errors.name.message}</p>}
        </div>

        {/* Sector */}
        <div>
          <label htmlFor="sector" className="label">القطاع</label>
          <input id="sector" type="text" {...register('sector')} className="input" />
          {errors.sector && <p className="error-message">{errors.sector.message}</p>}
        </div>

        {/* Activity */}
        <div>
          <label htmlFor="activity" className="label">النشاط</label>
          <input id="activity" type="text" {...register('activity')} className="input" />
          {errors.activity && <p className="error-message">{errors.activity.message}</p>}
        </div>

        {/* Years to Analyze */}
        <div>
          <label htmlFor="yearsToAnalyze" className="label">عدد سنوات التحليل</label>
          <input id="yearsToAnalyze" type="number" {...register('yearsToAnalyze', { valueAsNumber: true })} className="input" />
          {errors.yearsToAnalyze && <p className="error-message">{errors.yearsToAnalyze.message}</p>}
        </div>

        {/* Currency */}
        <div>
          <label htmlFor="currency" className="label">العملة</label>
          <select id="currency" {...register('currency')} className="input">
            <option value="SAR">ريال سعودي (SAR)</option>
            <option value="USD">دولار أمريكي (USD)</option>
            <option value="EUR">يورو (EUR)</option>
          </select>
          {errors.currency && <p className="error-message">{errors.currency.message}</p>}
        </div>
      </div>
      
      <button type="submit" className="btn-primary w-full py-3 font-bold">حفظ ومتابعة</button>
    </form>
  );
};

export default CompanyDetailsForm;
