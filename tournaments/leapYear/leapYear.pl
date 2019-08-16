#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub leapYear {
    my ($year) = @_;

    return !($year % 4) && $year % 100 || !($year % 400) ? 1 : 0;
}
